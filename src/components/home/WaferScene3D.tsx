'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { SemiconductorLattice } from '@/components/home/SemiconductorLattice';

export const WaferScene3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [webGLFailed, setWebGLFailed] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Detect WebGL capability safely
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
    } catch {
      setWebGLFailed(true);
      return;
    }

    const width = container.clientWidth || 540;
    const height = container.clientHeight || 540;

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();

    // Camera setup with refined perspective
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, -0.2, 7.6);

    // Master group containing all 3D components
    const masterGroup = new THREE.Group();
    // Default cinematic tilt: tilted forward to reveal surface depth
    masterGroup.rotation.x = 0.55;
    masterGroup.rotation.y = -0.35;
    scene.add(masterGroup);

    // ==========================================
    // 1. BASE 300mm SILICON WAFER SUBSTRATE
    // ==========================================
    const waferRadius = 2.45;
    const waferThickness = 0.08;

    // Multi-segment cylinder for ultra-smooth edge reflections
    const waferGeometry = new THREE.CylinderGeometry(
      waferRadius,
      waferRadius,
      waferThickness,
      96,
      1,
      false
    );
    const waferMaterial = new THREE.MeshStandardMaterial({
      color: 0x080f1a,
      metalness: 0.92,
      roughness: 0.18,
    });
    const waferMesh = new THREE.Mesh(waferGeometry, waferMaterial);
    waferMesh.rotation.x = Math.PI / 2;
    masterGroup.add(waferMesh);

    // Outer wafer bevel ring (mirror-polished edge chamfer)
    const bevelGeometry = new THREE.RingGeometry(waferRadius - 0.03, waferRadius + 0.02, 96);
    const bevelMaterial = new THREE.MeshStandardMaterial({
      color: 0xff5d37,
      metalness: 0.9,
      roughness: 0.1,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.85,
    });
    const bevelRing = new THREE.Mesh(bevelGeometry, bevelMaterial);
    bevelRing.position.z = waferThickness / 2 + 0.002;
    masterGroup.add(bevelRing);

    // Substrate outer guide ring with laser fiducials
    const outerGuideGeo = new THREE.RingGeometry(2.32, 2.34, 64);
    const outerGuideMat = new THREE.MeshBasicMaterial({
      color: 0x3a4655,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.4,
    });
    const outerGuide = new THREE.Mesh(outerGuideGeo, outerGuideMat);
    outerGuide.position.z = waferThickness / 2 + 0.004;
    masterGroup.add(outerGuide);

    // ==========================================
    // 2. LAYERED STEPPER DIE GRID (MICROCHIP DIES)
    // ==========================================
    // Grid of silicon microchips etched across the wafer disk
    const dieGroup = new THREE.Group();
    const dieWidth = 0.38;
    const dieHeight = 0.38;
    const dieGap = 0.04;
    const dieThickness = 0.025;
    const dieRows = 9;
    const dieCols = 9;

    const dieBaseGeometry = new THREE.BoxGeometry(dieWidth, dieHeight, dieThickness);
    
    // Materials for dies with subtle variation representing multi-layer metal stacks
    const dieMatA = new THREE.MeshStandardMaterial({
      color: 0x0e1726,
      metalness: 0.88,
      roughness: 0.28,
    });
    const dieMatB = new THREE.MeshStandardMaterial({
      color: 0x142033,
      metalness: 0.82,
      roughness: 0.22,
    });
    const dieMatHighlighted = new THREE.MeshStandardMaterial({
      color: 0x1d2d47,
      metalness: 0.95,
      roughness: 0.15,
      emissive: 0x22120a,
      emissiveIntensity: 0.3,
    });

    const activeDieCoordinates: THREE.Vector3[] = [];

    for (let r = -Math.floor(dieRows / 2); r <= Math.floor(dieRows / 2); r++) {
      for (let c = -Math.floor(dieCols / 2); c <= Math.floor(dieCols / 2); c++) {
        const x = c * (dieWidth + dieGap);
        const y = r * (dieHeight + dieGap);
        const distFromCenter = Math.sqrt(x * x + y * y);

        // Keep dies strictly within the 300mm wafer boundary
        if (distFromCenter < waferRadius - 0.28) {
          // Leave central zone for the high-density compute package
          const isCenter = Math.abs(r) <= 1 && Math.abs(c) <= 1;
          if (!isCenter) {
            const matChoice =
              (r + c) % 5 === 0 ? dieMatHighlighted : (r * c) % 2 === 0 ? dieMatA : dieMatB;
            const dieMesh = new THREE.Mesh(dieBaseGeometry, matChoice);
            dieMesh.position.set(x, y, waferThickness / 2 + dieThickness / 2 + 0.005);
            dieGroup.add(dieMesh);

            if (distFromCenter > 0.9 && Math.random() > 0.4) {
              activeDieCoordinates.push(dieMesh.position.clone());
            }
          }
        }
      }
    }
    masterGroup.add(dieGroup);

    // ==========================================
    // 3. CENTRAL ADVANCED COMPUTE PACKAGE (SoC / HBM)
    // ==========================================
    const coreGroup = new THREE.Group();

    // Package Substrate Base
    const pkgBaseGeo = new THREE.BoxGeometry(1.22, 1.22, 0.045);
    const pkgBaseMat = new THREE.MeshStandardMaterial({
      color: 0x0a1424,
      metalness: 0.95,
      roughness: 0.12,
    });
    const pkgBase = new THREE.Mesh(pkgBaseGeo, pkgBaseMat);
    pkgBase.position.z = waferThickness / 2 + 0.025;
    coreGroup.add(pkgBase);

    // Central Compute Logic Die
    const logicDieGeo = new THREE.BoxGeometry(0.55, 0.55, 0.04);
    const logicDieMat = new THREE.MeshStandardMaterial({
      color: 0x18263e,
      metalness: 0.98,
      roughness: 0.08,
      emissive: 0x3d170a,
      emissiveIntensity: 0.45,
    });
    const logicDie = new THREE.Mesh(logicDieGeo, logicDieMat);
    logicDie.position.z = waferThickness / 2 + 0.055;
    coreGroup.add(logicDie);

    // 4 High Bandwidth Memory (HBM) Stacks flanking the central die
    const hbmGeo = new THREE.BoxGeometry(0.18, 0.32, 0.035);
    const hbmMat = new THREE.MeshStandardMaterial({
      color: 0x111c2e,
      metalness: 0.9,
      roughness: 0.2,
    });

    const hbmOffsets = [
      { x: -0.42, y: 0 },
      { x: 0.42, y: 0 },
      { x: 0, y: -0.42, rot: Math.PI / 2 },
      { x: 0, y: 0.42, rot: Math.PI / 2 },
    ];

    hbmOffsets.forEach((cfg) => {
      const hbmMesh = new THREE.Mesh(hbmGeo, hbmMat);
      hbmMesh.position.set(cfg.x, cfg.y, waferThickness / 2 + 0.05);
      if (cfg.rot) hbmMesh.rotation.z = cfg.rot;
      coreGroup.add(hbmMesh);
    });

    // Copper Heat Spreader & Optical Framing Line
    const frameGeo = new THREE.RingGeometry(0.66, 0.68, 4);
    const frameMat = new THREE.MeshBasicMaterial({
      color: 0xff5d37,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.9,
    });
    const frameMesh = new THREE.Mesh(frameGeo, frameMat);
    frameMesh.position.z = waferThickness / 2 + 0.07;
    frameMesh.rotation.z = Math.PI / 4;
    coreGroup.add(frameMesh);

    masterGroup.add(coreGroup);

    // ==========================================
    // 4. PRECISION PHOTOLITHOGRAPHY RETICLE RINGS
    // ==========================================
    const reticleGroup = new THREE.Group();

    // Inner reticle target ring (vermilion laser alignment)
    const reticleRing1 = new THREE.Mesh(
      new THREE.RingGeometry(0.92, 0.932, 64),
      new THREE.MeshBasicMaterial({
        color: 0xff5d37,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.65,
      })
    );
    reticleRing1.position.z = waferThickness / 2 + 0.05;
    reticleGroup.add(reticleRing1);

    // Secondary dashed measurement ring
    const reticleRing2 = new THREE.Mesh(
      new THREE.RingGeometry(1.65, 1.662, 64),
      new THREE.MeshBasicMaterial({
        color: 0xd9d5cd,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.3,
      })
    );
    reticleRing2.position.z = waferThickness / 2 + 0.052;
    reticleGroup.add(reticleRing2);

    // High-NA Optical Stepper Crosshairs
    const crosshairMat = new THREE.LineDashedMaterial({
      color: 0xff5d37,
      dashSize: 0.08,
      gapSize: 0.05,
      transparent: true,
      opacity: 0.5,
    });

    const crossPointsX = [new THREE.Vector3(-2.2, 0, waferThickness / 2 + 0.04), new THREE.Vector3(2.2, 0, waferThickness / 2 + 0.04)];
    const crossGeoX = new THREE.BufferGeometry().setFromPoints(crossPointsX);
    const crosshairLineX = new THREE.Line(crossGeoX, crosshairMat);
    crosshairLineX.computeLineDistances();
    reticleGroup.add(crosshairLineX);

    const crossPointsY = [new THREE.Vector3(0, -2.2, waferThickness / 2 + 0.04), new THREE.Vector3(0, 2.2, waferThickness / 2 + 0.04)];
    const crossGeoY = new THREE.BufferGeometry().setFromPoints(crossPointsY);
    const crosshairLineY = new THREE.Line(crossGeoY, crosshairMat);
    crosshairLineY.computeLineDistances();
    reticleGroup.add(crosshairLineY);

    masterGroup.add(reticleGroup);

    // ==========================================
    // 5. MICROCHIP CIRCUIT BUS TRACES (ORTHOGONAL ROADS)
    // ==========================================
    const circuitPoints: THREE.Vector3[] = [];
    const traceCount = 28;

    for (let i = 0; i < traceCount; i++) {
      const angle = (i / traceCount) * Math.PI * 2;
      const rInner = 0.68;
      const rCorner = 1.1 + (i % 4) * 0.22;
      const rOuter = 2.05 + (i % 3) * 0.12;

      const p0 = new THREE.Vector3(Math.cos(angle) * rInner, Math.sin(angle) * rInner, waferThickness / 2 + 0.035);
      // 45° step to create signature photolithography routing
      const p1 = new THREE.Vector3(Math.cos(angle) * rCorner, Math.sin(angle) * rCorner, waferThickness / 2 + 0.035);
      const angleShift = angle + ((i % 2 === 0 ? 1 : -1) * 0.25);
      const p2 = new THREE.Vector3(Math.cos(angleShift) * (rCorner + 0.35), Math.sin(angleShift) * (rCorner + 0.35), waferThickness / 2 + 0.035);
      const p3 = new THREE.Vector3(Math.cos(angleShift) * rOuter, Math.sin(angleShift) * rOuter, waferThickness / 2 + 0.035);

      circuitPoints.push(p0, p1, p1, p2, p2, p3);
    }

    const circuitGeo = new THREE.BufferGeometry().setFromPoints(circuitPoints);
    const circuitMat = new THREE.LineBasicMaterial({
      color: 0xff5d37,
      transparent: true,
      opacity: 0.35,
    });
    const circuitLines = new THREE.LineSegments(circuitGeo, circuitMat);
    masterGroup.add(circuitLines);

    // ==========================================
    // 6. INTERCONNECTED KNOWLEDGE NODES & DATA PATHS
    // ==========================================
    // 6 elevated orbiting nodes representing the intellectual pillars:
    // Computer Science, AI, Economics, Finance, Mathematics, Psychology
    const knowledgeGroup = new THREE.Group();
    const nodeCount = 6;
    const nodeMeshes: THREE.Mesh[] = [];
    const nodeHaloMeshes: THREE.Mesh[] = [];
    const nodePositions: THREE.Vector3[] = [];

    const nodeColors = [
      0xff5d37, // Vermilion (Core Synthesis)
      0xff7a59, // Amber Vermilion
      0x4a9eff, // Electric Azure (Computing & Systems)
      0x5ae4aa, // Mint Green (Quantitative Economics)
      0xffb042, // Warm Gold (Capital & Finance)
      0xd9d5cd, // Clean Silver (First Principles Philosophy)
    ];

    const nodeCoreGeo = new THREE.SphereGeometry(0.065, 16, 16);
    const nodeHaloGeo = new THREE.RingGeometry(0.09, 0.12, 24);

    for (let i = 0; i < nodeCount; i++) {
      const angle = (i / nodeCount) * Math.PI * 2;
      const radius = 2.15;
      const zHeight = 0.28 + (i % 2) * 0.12;
      const pos = new THREE.Vector3(Math.cos(angle) * radius, Math.sin(angle) * radius, zHeight);
      nodePositions.push(pos);

      const coreMat = new THREE.MeshStandardMaterial({
        color: nodeColors[i],
        emissive: nodeColors[i],
        emissiveIntensity: 0.6,
        roughness: 0.2,
        metalness: 0.8,
      });
      const nodeMesh = new THREE.Mesh(nodeCoreGeo, coreMat);
      nodeMesh.position.copy(pos);
      knowledgeGroup.add(nodeMesh);
      nodeMeshes.push(nodeMesh);

      // Halo ring around each knowledge node
      const haloMat = new THREE.MeshBasicMaterial({
        color: nodeColors[i],
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.5,
      });
      const haloMesh = new THREE.Mesh(nodeHaloGeo, haloMat);
      haloMesh.position.copy(pos);
      knowledgeGroup.add(haloMesh);
      nodeHaloMeshes.push(haloMesh);
    }

    // Dynamic 3D Splines connecting the core compute die to each knowledge node
    const splineGroup = new THREE.Group();
    const splineCurves: THREE.CubicBezierCurve3[] = [];
    const packetMeshes: THREE.Mesh[] = [];
    const packetSpeeds = [0.25, 0.32, 0.28, 0.35, 0.22, 0.3];
    const packetOffsets = [0.0, 0.18, 0.42, 0.65, 0.82, 0.33];

    const packetGeo = new THREE.SphereGeometry(0.035, 12, 12);

    nodePositions.forEach((pos, idx) => {
      const startPoint = new THREE.Vector3(
        pos.x * 0.22,
        pos.y * 0.22,
        waferThickness / 2 + 0.08
      );
      // Mid control point with elegant upward arc
      const midPoint = new THREE.Vector3(
        pos.x * 0.62,
        pos.y * 0.62,
        pos.z + 0.28
      );
      const endPoint = pos.clone();

      const curve = new THREE.CubicBezierCurve3(startPoint, midPoint, midPoint, endPoint);
      splineCurves.push(curve);

      // Render the arc path
      const points = curve.getPoints(36);
      const arcGeo = new THREE.BufferGeometry().setFromPoints(points);
      const arcMat = new THREE.LineBasicMaterial({
        color: 0xff5d37,
        transparent: true,
        opacity: 0.3,
      });
      const arcLine = new THREE.Line(arcGeo, arcMat);
      splineGroup.add(arcLine);

      // Flowing data packet sphere along the spline
      const packetMat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
      });
      const packetMesh = new THREE.Mesh(packetGeo, packetMat);
      splineGroup.add(packetMesh);
      packetMeshes.push(packetMesh);
    });

    masterGroup.add(knowledgeGroup);
    masterGroup.add(splineGroup);

    // ==========================================
    // 7. CINEMATIC LIGHTING DESIGN
    // ==========================================
    // Ambient light: subtle illumination to maintain deep ink contrast
    const ambientLight = new THREE.AmbientLight(0xf5f1e9, 0.55);
    scene.add(ambientLight);

    // Primary Grazing Key Light: sharp specular reflections on dies
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.8);
    keyLight.position.set(4.5, 5.0, 6.5);
    scene.add(keyLight);

    // Signature Vermilion Point Light: vibrant warm glow from the side
    const vermilionLight = new THREE.PointLight(0xff5d37, 4.2, 14, 1.2);
    vermilionLight.position.set(-3.5, -2.5, 3.2);
    scene.add(vermilionLight);

    // Cyan/Blue Accent Rim Light: high-tech semiconductor laboratory ambiance
    const rimLight = new THREE.PointLight(0x4a9eff, 2.2, 12, 1.5);
    rimLight.position.set(3.2, -3.2, 2.0);
    scene.add(rimLight);

    // ==========================================
    // 8. INTERACTION & CAMERA PARALLAX ENGINE
    // ==========================================
    let targetTiltX = 0.55;
    let targetTiltY = -0.35;
    let currentTiltX = 0.55;
    let currentTiltY = -0.35;

    const handleMouseMove = (e: MouseEvent) => {
      if (prefersReducedMotion) return;
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      
      // Responsive interactive tilt angle
      targetTiltX = 0.55 + y * 0.38;
      targetTiltY = -0.35 + x * 0.45;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // IntersectionObserver to pause rendering when off-screen
    let isVisible = true;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // ==========================================
    // 9. ANIMATION LOOP
    // ==========================================
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const elapsedTime = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        // Damped smooth mouse tilt interpolation
        currentTiltX += (targetTiltX - currentTiltX) * 0.045;
        currentTiltY += (targetTiltY - currentTiltY) * 0.045;

        masterGroup.rotation.x = currentTiltX;
        masterGroup.rotation.y = currentTiltY;

        // Slow, majestic planetary rotation of the reticle and circuit rings
        reticleGroup.rotation.z = -elapsedTime * 0.04;
        circuitLines.rotation.z = elapsedTime * 0.015;

        // Flowing data packets along splines
        packetMeshes.forEach((packet, idx) => {
          const speed = packetSpeeds[idx];
          const offset = packetOffsets[idx];
          const t = (elapsedTime * speed + offset) % 1.0;
          const curve = splineCurves[idx];
          const point = curve.getPointAt(t);
          packet.position.copy(point);
          // Scale pulse as it travels
          const scale = 0.8 + Math.sin(t * Math.PI) * 0.5;
          packet.scale.set(scale, scale, scale);
        });

        // Pulsing knowledge node halos
        nodeHaloMeshes.forEach((halo, idx) => {
          const pulse = 1.0 + Math.sin(elapsedTime * 2.0 + idx) * 0.12;
          halo.scale.set(pulse, pulse, pulse);
        });
      }

      renderer.render(scene, camera);
    };

    animate();
    setIsReady(true);

    // Responsive Window Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Comprehensive Resource Cleanup
    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      // Dispose geometries
      waferGeometry.dispose();
      bevelGeometry.dispose();
      outerGuideGeo.dispose();
      dieBaseGeometry.dispose();
      pkgBaseGeo.dispose();
      logicDieGeo.dispose();
      hbmGeo.dispose();
      frameGeo.dispose();
      circuitGeo.dispose();
      nodeCoreGeo.dispose();
      nodeHaloGeo.dispose();
      packetGeo.dispose();
      crossGeoX.dispose();
      crossGeoY.dispose();

      // Dispose materials
      waferMaterial.dispose();
      bevelMaterial.dispose();
      outerGuideMat.dispose();
      dieMatA.dispose();
      dieMatB.dispose();
      dieMatHighlighted.dispose();
      pkgBaseMat.dispose();
      logicDieMat.dispose();
      hbmMat.dispose();
      frameMat.dispose();
      circuitMat.dispose();
      crosshairMat.dispose();

      renderer.dispose();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  if (webGLFailed) {
    return <SemiconductorLattice />;
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[420px] sm:h-[480px] lg:h-[560px] flex items-center justify-center select-none"
      aria-label="Interactive 3D semiconductor wafer and interconnected knowledge network"
    >
      {/* Instant vector SVG fallback visible until Three.js GPU canvas initializes */}
      {!isReady && (
        <div className="absolute inset-0 flex items-center justify-center">
          <SemiconductorLattice />
        </div>
      )}
    </div>
  );
};
