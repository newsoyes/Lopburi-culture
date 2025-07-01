// ข้อมูลรายละเอียดของแต่ละรายการ
const itemData = {
    monkey: {
        title: "ลิงลพบุรี",
        description: "ลิงแสม (Macaca fascicularis) ที่อาศัยในเมืองลพบุรี เป็นสัญลักษณ์สำคัญของเมืองนี้ ลิงเหล่านี้อาศัยอยู่ตามโบราณสถานและวัดต่างๆ ในเมืองลพบุรี โดยเฉพาะที่วัดพระศรีรัตนมหาธาตุ และปรางค์สามยอด ลิงลพบุรีเป็นที่รู้จักในฐานะสัตว์ประจำเมืองที่สร้างความน่าสนใจให้กับนักท่องเที่ยว",
        color: "#8B4513"
    },
    "salted-egg": {
        title: "ไข่เค็มลพบุรี",
        description: "ไข่เค็มลพบุรีเป็นผลิตภัณฑ์ที่มีชื่อเสียงของจังหวัดลพบุรี ผลิตจากไข่เป็ดที่ผ่านการแช่ในน้ำเกลือและดินสอพองเป็นเวลานาน ทำให้ไข่แดงมีสีส้มเข้มและมีรสชาติเข้มข้น ไข่เค็มลพบุรีเป็นของฝากที่นิยมซื้อกลับบ้าน",
        color: "#FFD700"
    },
    chalk: {
        title: "ดินสอพอง",
        description: "ดินสอพองลพบุรีเป็นผลิตภัณฑ์ที่มีคุณภาพดี ใช้ในการทำไข่เค็มและเป็นส่วนผสมในอาหารต่างๆ ดินสอพองจากลพบุรีมีแร่ธาตุที่สำคัญและเป็นที่ยอมรับในด้านคุณภาพ",
        color: "#F5F5DC"
    },
    prang: {
        title: "ปรางค์สามยอด",
        description: "ปรางค์สามยอดเป็นโบราณสถานสำคัญของลพบุรี สร้างขึ้นในสมัยพระเจ้าชัยวรมันที่ 7 แห่งอาณาจักรขอม เป็นสถาปัตยกรรมแบบบายนที่มีความงดงามและเป็นสัญลักษณ์ของเมืองลพบุรี",
        color: "#CD853F"
    },
    dam: {
        title: "เขื่อนป่าสักชลสิทธิ์",
        description: "เขื่อนป่าสักชลสิทธิ์เป็นเขื่อนดินที่ใหญ่ที่สุดในประเทศไทย ตั้งอยู่ที่อำเภอพัฒนานิคม จังหวัดลพบุรี สร้างขึ้นเพื่อกักเก็บน้ำและผลิตไฟฟ้า เป็นแหล่งท่องเที่ยวสำคัญของจังหวัด",
        color: "#4682B4"
    },
    mountain: {
        title: "เขาจีนแล",
        description: "เขาจีนแลเป็นภูเขาสูงที่มีความสำคัญทางประวัติศาสตร์ ตั้งอยู่ในอำเภอเมืองลพบุรี เป็นที่ตั้งของวัดเขาจีนแลที่มีความสวยงามและเป็นจุดชมวิวที่สำคัญของจังหวัดลพบุรี",
        color: "#228B22"
    }
};

// ตัวแปรสำหรับ Three.js
let scene, camera, renderer, controls;
let currentModel = null;

// เริ่มต้นเว็บไซต์
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    addParticleEffects();
});

// เพิ่ม Event Listeners
function initializeEventListeners() {
    // คลิกที่ catalog items
    const catalogItems = document.querySelectorAll('.catalog-item');
    catalogItems.forEach(item => {
        item.addEventListener('click', function() {
            const itemType = this.getAttribute('data-item');
            openModelModal(itemType);
        });
    });

    // ปิด modal
    const modal = document.getElementById('modelModal');
    const closeBtn = document.querySelector('.close');
    
    closeBtn.addEventListener('click', function() {
        closeModelModal();
    });

    // ปิด modal เมื่อคลิกนอก modal
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModelModal();
        }
    });

    // ปิด modal ด้วย ESC key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModelModal();
        }
    });
}

// เปิด Modal สำหรับแสดงโมเดล 3D
function openModelModal(itemType) {
    const modal = document.getElementById('modelModal');
    const modalTitle = document.getElementById('modalTitle');
    const modelDescription = document.getElementById('modelDescription');
    
    const data = itemData[itemType];
    
    modalTitle.textContent = data.title;
    modelDescription.textContent = data.description;
    
    modal.style.display = 'block';
    
    // สร้างโมเดล 3D
    create3DModel(itemType, data);
}

// ปิด Modal
function closeModelModal() {
    const modal = document.getElementById('modelModal');
    modal.style.display = 'none';
    
    // ล้างโมเดล 3D
    if (currentModel) {
        scene.remove(currentModel);
        currentModel = null;
    }
}

// สร้างโมเดล 3D
function create3DModel(itemType, data) {
    const container = document.getElementById('modelContainer');
    
    // ล้าง container
    container.innerHTML = '';
    
    // สร้าง scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0a);
    
    // สร้าง camera
    camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 5;
    
    // สร้าง renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);
    
    // เพิ่ม controls
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    
    // เพิ่มแสง
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0x00ffff, 1);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);
    
    const pointLight = new THREE.PointLight(0xff00ff, 1, 100);
    pointLight.position.set(-5, 5, 5);
    scene.add(pointLight);
    
    // สร้างโมเดลตามประเภท
    switch(itemType) {
        case 'monkey':
            createMonkeyModel();
            break;
        case 'salted-egg':
            createEggModel();
            break;
        case 'chalk':
            createChalkModel();
            break;
        case 'prang':
            createPrangModel();
            break;
        case 'dam':
            createDamModel();
            break;
        case 'mountain':
            createMountainModel();
            break;
    }
    
    // เริ่ม animation loop
    animate();
    
    // ปรับขนาดเมื่อหน้าจอเปลี่ยน
    window.addEventListener('resize', onWindowResize);
}

// สร้างโมเดลลิง
function createMonkeyModel() {
    const group = new THREE.Group();
    
    // หัว
    const headGeometry = new THREE.SphereGeometry(1, 32, 32);
    const headMaterial = new THREE.MeshLambertMaterial({ color: 0x8B4513 });
    const head = new THREE.Mesh(headGeometry, headMaterial);
    head.position.y = 1.5;
    group.add(head);
    
    // หู
    const earGeometry = new THREE.SphereGeometry(0.3, 16, 16);
    const earMaterial = new THREE.MeshLambertMaterial({ color: 0x654321 });
    
    const leftEar = new THREE.Mesh(earGeometry, earMaterial);
    leftEar.position.set(-0.8, 2, 0);
    group.add(leftEar);
    
    const rightEar = new THREE.Mesh(earGeometry, earMaterial);
    rightEar.position.set(0.8, 2, 0);
    group.add(rightEar);
    
    // ตา
    const eyeGeometry = new THREE.SphereGeometry(0.1, 16, 16);
    const eyeMaterial = new THREE.MeshLambertMaterial({ color: 0x000000 });
    
    const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    leftEye.position.set(-0.3, 1.7, 0.8);
    group.add(leftEye);
    
    const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    rightEye.position.set(0.3, 1.7, 0.8);
    group.add(rightEye);
    
    // ลำตัว
    const bodyGeometry = new THREE.CylinderGeometry(0.8, 0.6, 2, 32);
    const bodyMaterial = new THREE.MeshLambertMaterial({ color: 0x8B4513 });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.position.y = 0;
    group.add(body);
    
    // แขน
    const armGeometry = new THREE.CylinderGeometry(0.2, 0.15, 1.5, 16);
    const armMaterial = new THREE.MeshLambertMaterial({ color: 0x8B4513 });
    
    const leftArm = new THREE.Mesh(armGeometry, armMaterial);
    leftArm.position.set(-1.2, 0.5, 0);
    leftArm.rotation.z = Math.PI / 4;
    group.add(leftArm);
    
    const rightArm = new THREE.Mesh(armGeometry, armMaterial);
    rightArm.position.set(1.2, 0.5, 0);
    rightArm.rotation.z = -Math.PI / 4;
    group.add(rightArm);
    
    // ขา
    const legGeometry = new THREE.CylinderGeometry(0.25, 0.2, 1.2, 16);
    const legMaterial = new THREE.MeshLambertMaterial({ color: 0x8B4513 });
    
    const leftLeg = new THREE.Mesh(legGeometry, legMaterial);
    leftLeg.position.set(-0.4, -1.6, 0);
    group.add(leftLeg);
    
    const rightLeg = new THREE.Mesh(legGeometry, legMaterial);
    rightLeg.position.set(0.4, -1.6, 0);
    group.add(rightLeg);
    
    // หาง
    const tailGeometry = new THREE.CylinderGeometry(0.1, 0.05, 1.5, 16);
    const tailMaterial = new THREE.MeshLambertMaterial({ color: 0x654321 });
    const tail = new THREE.Mesh(tailGeometry, tailMaterial);
    tail.position.set(0, 0, -1.2);
    tail.rotation.x = Math.PI / 2;
    group.add(tail);
    
    scene.add(group);
    currentModel = group;
}

// สร้างโมเดลไข่
function createEggModel() {
    const group = new THREE.Group();
    
    // ไข่ขาว
    const whiteGeometry = new THREE.SphereGeometry(1.2, 32, 32);
    const whiteMaterial = new THREE.MeshLambertMaterial({ color: 0xF5F5DC });
    const white = new THREE.Mesh(whiteGeometry, whiteMaterial);
    white.scale.set(1, 1.3, 1);
    group.add(white);
    
    // ไข่แดง
    const yolkGeometry = new THREE.SphereGeometry(0.6, 32, 32);
    const yolkMaterial = new THREE.MeshLambertMaterial({ color: 0xFFD700 });
    const yolk = new THREE.Mesh(yolkGeometry, yolkMaterial);
    yolk.position.y = 0.3;
    group.add(yolk);
    
    // เปลือกไข่
    const shellGeometry = new THREE.SphereGeometry(1.3, 32, 32);
    const shellMaterial = new THREE.MeshLambertMaterial({ 
        color: 0xF5F5DC,
        transparent: true,
        opacity: 0.3
    });
    const shell = new THREE.Mesh(shellGeometry, shellMaterial);
    shell.scale.set(1, 1.3, 1);
    group.add(shell);
    
    scene.add(group);
    currentModel = group;
}

// สร้างโมเดลดินสอพอง
function createChalkModel() {
    const group = new THREE.Group();
    
    // ก้อนดินสอพอง
    const chalkGeometry = new THREE.CylinderGeometry(0.3, 0.3, 2, 16);
    const chalkMaterial = new THREE.MeshLambertMaterial({ color: 0xF5F5DC });
    const chalk = new THREE.Mesh(chalkGeometry, chalkMaterial);
    group.add(chalk);
    
    // เพิ่มพื้นผิว
    const textureGeometry = new THREE.SphereGeometry(0.1, 8, 8);
    const textureMaterial = new THREE.MeshLambertMaterial({ color: 0xE6E6FA });
    
    for (let i = 0; i < 20; i++) {
        const texture = new THREE.Mesh(textureGeometry, textureMaterial);
        texture.position.set(
            (Math.random() - 0.5) * 0.5,
            (Math.random() - 0.5) * 2,
            (Math.random() - 0.5) * 0.5
        );
        group.add(texture);
    }
    
    scene.add(group);
    currentModel = group;
}

// สร้างโมเดลปรางค์
function createPrangModel() {
    const group = new THREE.Group();
    
    // ฐาน
    const baseGeometry = new THREE.BoxGeometry(3, 0.5, 3);
    const baseMaterial = new THREE.MeshLambertMaterial({ color: 0xCD853F });
    const base = new THREE.Mesh(baseGeometry, baseMaterial);
    base.position.y = -1.5;
    group.add(base);
    
    // ปรางค์หลัก
    const mainPrangGeometry = new THREE.ConeGeometry(1, 3, 8);
    const mainPrangMaterial = new THREE.MeshLambertMaterial({ color: 0xCD853F });
    const mainPrang = new THREE.Mesh(mainPrangGeometry, mainPrangMaterial);
    mainPrang.position.y = 0.5;
    group.add(mainPrang);
    
    // ปรางค์ด้านข้าง
    const sidePrangGeometry = new THREE.ConeGeometry(0.6, 2, 8);
    const sidePrangMaterial = new THREE.MeshLambertMaterial({ color: 0xCD853F });
    
    const leftPrang = new THREE.Mesh(sidePrangGeometry, sidePrangMaterial);
    leftPrang.position.set(-1.5, 0, 0);
    group.add(leftPrang);
    
    const rightPrang = new THREE.Mesh(sidePrangGeometry, sidePrangMaterial);
    rightPrang.position.set(1.5, 0, 0);
    group.add(rightPrang);
    
    // ยอดปรางค์
    const topGeometry = new THREE.SphereGeometry(0.2, 16, 16);
    const topMaterial = new THREE.MeshLambertMaterial({ color: 0xFFD700 });
    const top = new THREE.Mesh(topGeometry, topMaterial);
    top.position.y = 2.5;
    group.add(top);
    
    scene.add(group);
    currentModel = group;
}

// สร้างโมเดลเขื่อน
function createDamModel() {
    const group = new THREE.Group();
    
    // เขื่อน
    const damGeometry = new THREE.BoxGeometry(4, 2, 0.5);
    const damMaterial = new THREE.MeshLambertMaterial({ color: 0x4682B4 });
    const dam = new THREE.Mesh(damGeometry, damMaterial);
    dam.position.y = 0;
    group.add(dam);
    
    // น้ำ
    const waterGeometry = new THREE.BoxGeometry(3, 1, 2);
    const waterMaterial = new THREE.MeshLambertMaterial({ 
        color: 0x1E90FF,
        transparent: true,
        opacity: 0.7
    });
    const water = new THREE.Mesh(waterGeometry, waterMaterial);
    water.position.set(0, -0.5, 1);
    group.add(water);
    
    // ภูเขา
    const mountainGeometry = new THREE.ConeGeometry(1.5, 2, 8);
    const mountainMaterial = new THREE.MeshLambertMaterial({ color: 0x228B22 });
    const mountain = new THREE.Mesh(mountainGeometry, mountainMaterial);
    mountain.position.set(0, 0, -2);
    group.add(mountain);
    
    scene.add(group);
    currentModel = group;
}

// สร้างโมเดลภูเขา
function createMountainModel() {
    const group = new THREE.Group();
    
    // ภูเขาหลัก
    const mainMountainGeometry = new THREE.ConeGeometry(2, 4, 8);
    const mainMountainMaterial = new THREE.MeshLambertMaterial({ color: 0x228B22 });
    const mainMountain = new THREE.Mesh(mainMountainGeometry, mainMountainMaterial);
    mainMountain.position.y = 0;
    group.add(mainMountain);
    
    // ภูเขาด้านข้าง
    const sideMountainGeometry = new THREE.ConeGeometry(1, 2.5, 8);
    const sideMountainMaterial = new THREE.MeshLambertMaterial({ color: 0x32CD32 });
    
    const leftMountain = new THREE.Mesh(sideMountainGeometry, sideMountainMaterial);
    leftMountain.position.set(-2, -0.5, 0);
    group.add(leftMountain);
    
    const rightMountain = new THREE.Mesh(sideMountainGeometry, sideMountainMaterial);
    rightMountain.position.set(2, -0.5, 0);
    group.add(rightMountain);
    
    // หิมะบนยอด
    const snowGeometry = new THREE.SphereGeometry(0.3, 16, 16);
    const snowMaterial = new THREE.MeshLambertMaterial({ color: 0xFFFFFF });
    const snow = new THREE.Mesh(snowGeometry, snowMaterial);
    snow.position.y = 2.5;
    group.add(snow);
    
    scene.add(group);
    currentModel = group;
}

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    
    if (currentModel) {
        currentModel.rotation.y += 0.01;
    }
    
    if (controls) {
        controls.update();
    }
    
    if (renderer) {
        renderer.render(scene, camera);
    }
}

// ปรับขนาดเมื่อหน้าจอเปลี่ยน
function onWindowResize() {
    const container = document.getElementById('modelContainer');
    if (camera && renderer && container) {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    }
}

// เพิ่ม Particle Effects
function addParticleEffects() {
    const particles = document.createElement('div');
    particles.className = 'particles';
    particles.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
    `;
    document.body.appendChild(particles);
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: #00ffff;
            border-radius: 50%;
            animation: float-particle ${Math.random() * 10 + 10}s linear infinite;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            opacity: ${Math.random() * 0.5 + 0.1};
        `;
        particles.appendChild(particle);
    }
}

// เพิ่ม CSS animation สำหรับ particles
const style = document.createElement('style');
style.textContent = `
    @keyframes float-particle {
        0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style); 