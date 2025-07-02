// NEWSOYES
const itemData = {
    monkey: {
        title: "ลิงลพบุรี",
        description: "ลิงแสม (Macaca fascicularis) เป็นสัญลักษณ์สำคัญของลพบุรี พบได้ทั่วไปตามโบราณสถาน เช่น ปรางค์สามยอด วัดพระศรีรัตนมหาธาตุ และเป็นที่ดึงดูดนักท่องเที่ยวให้มาเยี่ยมชมและให้อาหารลิงในเมืองลพบุรีทุกปี โดยเฉพาะในงานเลี้ยงโต๊ะจีนลิงที่จัดขึ้นเป็นประจำทุกปี",
        reference: "https://www.lopburi.org/copy-of",
        color: "#8B4513",
        modelType: "glb",
        view360: "https://www.google.com/maps/@14.7995,100.6533,3a,75y,0h,90t/data=!3m6!1e1!3m4!1s!2e0!7i16384!8i8192",
        relatedCulture: ["ปรางค์สามยอด", "งานเลี้ยงโต๊ะจีนลิง", "วัดพระศรีรัตนมหาธาตุ"],
        festivals: ["งานเลี้ยงโต๊ะจีนลิง (พฤศจิกายน)", "เทศกาลลิงลพบุรี"],
        history: "ลิงแสมเริ่มเข้ามาอาศัยในลพบุรีตั้งแต่สมัยโบราณ และกลายเป็นสัญลักษณ์ของเมืองในปัจจุบัน"
    },
    "salted-egg": {
        title: "ไข่เค็มลพบุรี",
        description: "ไข่เค็มลพบุรี ผลิตจากไข่เป็ดคุณภาพดีและดินสอพองของลพบุรี มีรสชาติอร่อย ไข่แดงมันเยิ้ม นิยมซื้อเป็นของฝากและใช้ประกอบอาหารหลากหลายเมนู เช่น ข้าวต้ม ไข่เค็มต้มยางมะตูม ฯลฯ",
        reference: "https://itech.tru.ac.th/Art/show_4.php",
        color: "#FFD700",
        modelType: "glb",
        view360: "https://www.google.com/maps/@14.7995,100.6533,3a,75y,0h,90t/data=!3m6!1e1!3m4!1s!2e0!7i16384!8i8192",
        relatedCulture: ["ดินสอพอง", "ตลาดลพบุรี", "อาหารพื้นเมือง"],
        festivals: ["งานของดีเมืองลพบุรี", "เทศกาลอาหารไทย"],
        history: "ไข่เค็มลพบุรีมีประวัติยาวนานและเป็นสินค้าขึ้นชื่อของจังหวัด"
    },
    chalk: {
        title: "ดินสอพองลพบุรี",
        description: "ดินสอพองลพบุรีเป็นวัตถุดิบสำคัญในการทำไข่เค็มและใช้ในประเพณีสงกรานต์ มีคุณสมบัติพิเศษคือเนื้อละเอียด สีขาวสะอาด และปลอดภัยต่อผิวหนัง เป็นสินค้าขึ้นชื่อของจังหวัดลพบุรี",
        reference: "https://www.ipst.ac.th/news/60772/20240411-limestone-ipst.html",
        color: "#F5F5DC",
        modelType: "glb",
        view360: "https://www.google.com/maps/@14.7995,100.6533,3a,75y,0h,90t/data=!3m6!1e1!3m4!1s!2e0!7i16384!8i8192",
        relatedCulture: ["ไข่เค็มลพบุรี", "ประเพณีสงกรานต์", "หัตถกรรมพื้นบ้าน"],
        festivals: ["ประเพณีสงกรานต์", "งานหัตถกรรมพื้นบ้าน"],
        history: "ดินสอพองถูกใช้ในประเพณีไทยมาตั้งแต่โบราณ"
    },
    prang: {
        title: "ปรางค์สามยอด",
        description: "ปรางค์สามยอดเป็นโบราณสถานสำคัญของลพบุรี สร้างขึ้นในสมัยขอมแบบบายน มีลักษณะเป็นปรางค์ 3 องค์เชื่อมต่อกัน เป็นสัญลักษณ์ของเมืองลพบุรีและเป็นที่อยู่อาศัยของลิงจำนวนมาก",
        reference: "https://th.wikipedia.org/wiki/%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%9B%E0%B8%A3%E0%B8%B2%E0%B8%87%E0%B8%84%E0%B9%8C%E0%B8%AA%E0%B8%B2%E0%B8%A1%E0%B8%A2%E0%B8%AD%E0%B8%94",
        color: "#CD853F",
        modelType: "glb",
        view360: "https://www.google.com/maps/@14.7995,100.6533,3a,75y,0h,90t/data=!3m6!1e1!3m4!1s!2e0!7i16384!8i8192",
        relatedCulture: ["ลิงลพบุรี", "วัดพระศรีรัตนมหาธาตุ", "ประวัติศาสตร์ขอม"],
        festivals: ["งานประเพณีลอยกระทง", "เทศกาลประวัติศาสตร์ลพบุรี"],
        history: "สร้างขึ้นในสมัยพระเจ้าชัยวรมันที่ 7 แห่งอาณาจักรขอม"
    },
    dam: {
        title: "เขื่อนป่าสักชลสิทธิ์",
        description: "เขื่อนป่าสักชลสิทธิ์เป็นเขื่อนดินที่ยาวที่สุดในประเทศไทย สร้างขึ้นเพื่อกักเก็บน้ำและป้องกันน้ำท่วมในลุ่มน้ำป่าสัก เป็นแหล่งท่องเที่ยวและจุดชมวิวที่สำคัญของลพบุรี",
        reference: "https://th.wikipedia.org/wiki/%E0%B9%80%E0%B8%82%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%99%E0%B8%9B%E0%B9%88%E0%B8%B2%E0%B8%AA%E0%B8%B1%E0%B8%81%E0%B8%8A%E0%B8%A5%E0%B8%AA%E0%B8%B4%E0%B8%97%E0%B8%98%E0%B8%B4%E0%B9%8C",
        color: "#4682B4",
        modelType: "glb",
        view360: "https://www.google.com/maps/@14.7995,100.6533,3a,75y,0h,90t/data=!3m6!1e1!3m4!1s!2e0!7i16384!8i8192",
        relatedCulture: ["การเกษตร", "การชลประทาน", "การท่องเที่ยว"],
        festivals: ["งานประเพณีบุญบั้งไฟ", "เทศกาลน้ำ"],
        history: "สร้างขึ้นในปี พ.ศ. 2537 เพื่อแก้ปัญหาน้ำท่วมและภัยแล้ง"
    },
    mountain: {
        title: "เขาวงพระจันทร์",
        description: "  เขาวงพระจันทร์ นั้นเป็นภูเขาที่สูงที่สุดในจังหวัดลพบุรี ทางขึ้นเป็นทางบันได 3,790 ขั้น ที่เดินทางได้ง่าย ไม่ลำบากเหมือนการเดินขึ้นเขาที่อื่นๆ ค่ะ และยังมีความเชื่อกันว่า หากใครได้มานมัสการรอยพระพุทธบาทที่ประดิษฐานอยู่บนยอดเขาวงพระจันทร์ จะประสบความสุข สมหวังทุกประการ ค่ะ ",
        reference: "https://travel.trueid.net/detail/AKz69Jd9N01",
        color: "#228B22",
        modelType: "glb",
        view360: "https://www.google.com/maps/@14.7995,100.6533,3a,75y,0h,90t/data=!3m6!1e1!3m4!1s!2e0!7i16384!8i8192",
        relatedCulture: ["รอยพระพุทธบาท", "การไหว้พระ", "การท่องเที่ยวเชิงธรรมชาติ"],
        festivals: ["งานประเพณีขึ้นเขาวงพระจันทร์", "เทศกาลไหว้พระ"],
        history: "เป็นภูเขาศักดิ์สิทธิ์ที่มีรอยพระพุทธบาทประดิษฐานอยู่บนยอดเขา"
    }
};

// NEWSOYES
const glbModels = {
    monkey: "models/monkey.glb",
    "salted-egg": "models/egg.glb",
    chalk: "models/white clay filler.glb",
    prang: "models/Phra Prang Sam Yot.glb",
    dam: "models/dam.glb",
    mountain: "models/mountain.glb"
};

// NEWSOYES
let scene, camera, renderer, controls;
let currentModel = null;
let currentMixer = null;

// NEWSOYES
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    addParticleEffects();
});

// NEWSOYES
function initializeEventListeners() {
    // NEWSOYES
    const catalogItems = document.querySelectorAll('.catalog-item');
    catalogItems.forEach(item => {
        item.addEventListener('click', function() {
            const itemType = this.getAttribute('data-item');
            openModelModal(itemType);
        });
    });

    // NEWSOYES
    const modal = document.getElementById('modelModal');
    const closeBtn = document.querySelector('.close');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            closeModelModal();
        });
    }

    // NEWSOYES
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModelModal();
        }
    });

    // NEWSOYES
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModelModal();
        }
    });
}

// NEWSOYES
function openModelModal(itemType) {
    const modal = document.getElementById('modelModal');
    const modalTitle = document.getElementById('modalTitle');
    const modelDescription = document.getElementById('modelDescription');
    
    const data = itemData[itemType];
    
    modalTitle.textContent = data.title;
    modelDescription.innerHTML = `
        <div>${data.description}</div>
        <div style="margin-top:1rem;">
            <a href="${data.reference}" target="_blank" style="color:#00ffff;text-decoration:underline;font-size:1rem;">
                🔗 แหล่งอ้างอิง
            </a>
        </div>
    `;
    
    modal.style.display = 'block';
    
    // NEWSOYES
    create3DModel(itemType, data);

    // NEWSOYES
    const downloadArea = document.getElementById('downloadArea');
    if (itemData[itemType].modelType === "glb" && glbModels[itemType]) {
        downloadArea.innerHTML = `
            <div class="modal-buttons">
                <a href="${glbModels[itemType]}" download style="display:inline-block; margin:0.5rem; padding:0.7rem 1.5rem; background:linear-gradient(45deg,#00ffff,#ff00ff); color:#111; border-radius:6px; font-family:'Orbitron',monospace; font-weight:700; text-decoration:none; box-shadow:0 0 10px #00ffff; transition:all 0.2s;">
                    ⬇️ ดาวน์โหลดไฟล์ 3D (.glb)
                </a>
                <button onclick="show360View('${itemType}')" style="display:inline-block; margin:0.5rem; padding:0.7rem 1.5rem; background:linear-gradient(45deg,#ff6b6b,#4ecdc4); color:#111; border-radius:6px; font-family:'Orbitron',monospace; font-weight:700; border:none; cursor:pointer; box-shadow:0 0 10px #ff6b6b; transition:all 0.2s;">
                    🌍 ดู 360° View
                </button>
                <button onclick="showRelatedCulture('${itemType}')" style="display:inline-block; margin:0.5rem; padding:0.7rem 1.5rem; background:linear-gradient(45deg,#a8e6cf,#dcedc1); color:#111; border-radius:6px; font-family:'Orbitron',monospace; font-weight:700; border:none; cursor:pointer; box-shadow:0 0 10px #a8e6cf; transition:all 0.2s;">
                    📚 วัฒนธรรมที่เกี่ยวข้อง
                </button>
                <button onclick="showModal('games')" style="display:inline-block; margin:0.5rem; padding:0.7rem 1.5rem; background:linear-gradient(45deg,#ff9a9e,#fecfef); color:#111; border-radius:6px; font-family:'Orbitron',monospace; font-weight:700; border:none; cursor:pointer; box-shadow:0 0 10px #ff9a9e; transition:all 0.2s;">
                    🎮 เกมส์และกิจกรรม
                </button>
            </div>
        `;
    } else {
        downloadArea.innerHTML = `
            <div class="modal-buttons">
                <button onclick="show360View('${itemType}')" style="display:inline-block; margin:0.5rem; padding:0.7rem 1.5rem; background:linear-gradient(45deg,#ff6b6b,#4ecdc4); color:#111; border-radius:6px; font-family:'Orbitron',monospace; font-weight:700; border:none; cursor:pointer; box-shadow:0 0 10px #ff6b6b; transition:all 0.2s;">
                    🌍 ดู 360° View
                </button>
                <button onclick="showRelatedCulture('${itemType}')" style="display:inline-block; margin:0.5rem; padding:0.7rem 1.5rem; background:linear-gradient(45deg,#a8e6cf,#dcedc1); color:#111; border-radius:6px; font-family:'Orbitron',monospace; font-weight:700; border:none; cursor:pointer; box-shadow:0 0 10px #a8e6cf; transition:all 0.2s;">
                    📚 วัฒนธรรมที่เกี่ยวข้อง
                </button>
                <button onclick="showModal('games')" style="display:inline-block; margin:0.5rem; padding:0.7rem 1.5rem; background:linear-gradient(45deg,#ff9a9e,#fecfef); color:#111; border-radius:6px; font-family:'Orbitron',monospace; font-weight:700; border:none; cursor:pointer; box-shadow:0 0 10px #ff9a9e; transition:all 0.2s;">
                    🎮 เกมส์และกิจกรรม
                </button>
            </div>
        `;
    }
}

// NEWSOYES
function closeModelModal() {
    const modal = document.getElementById('modelModal');
    modal.style.display = 'none';
    
    // NEWSOYES
    if (currentModel) {
        scene.remove(currentModel);
        currentModel = null;
    }
    
    // NEWSOYES
    if (currentMixer) {
        currentMixer = null;
    }
    
    // NEWSOYES
    hideLoadingIndicator();
    const errorMessage = document.querySelector('.error-message');
    if (errorMessage) {
        errorMessage.remove();
    }
}

// NEWSOYES
function create3DModel(itemType, data) {
    const container = document.getElementById('modelContainer');
    
    // NEWSOYES
    container.innerHTML = '';
    
    // NEWSOYES
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0a);
    
    // NEWSOYES
    camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 5;
    
    // NEWSOYES
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);
    
    // NEWSOYES
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    
    // NEWSOYES
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);
    
    const pointLight = new THREE.PointLight(0xffffff, 1.2, 100);
    pointLight.position.set(-5, 5, 5);
    scene.add(pointLight);
    
    // NEWSOYES
    console.log('Loading model for:', itemType);
    console.log('Model type:', data.modelType);
    console.log('GLB path:', glbModels[itemType]);
    
    if (data.modelType === "glb" && glbModels[itemType]) {
        console.log('Loading GLB model from:', glbModels[itemType]);
        loadGLBModel(glbModels[itemType]);
    } else {
        console.log('Using built-in model');
        // NEWSOYES
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
    }
    
    // NEWSOYES
    animate();
    
    // NEWSOYES
    window.addEventListener('resize', onWindowResize);
}

// NEWSOYES
function createMonkeyModel() {
    const group = new THREE.Group();
    
    // NEWSOYES
    const headGeometry = new THREE.SphereGeometry(1, 32, 32);
    const headMaterial = new THREE.MeshLambertMaterial({ color: 0x8B4513 });
    const head = new THREE.Mesh(headGeometry, headMaterial);
    head.position.y = 1.5;
    group.add(head);
    
    // NEWSOYES
    const earGeometry = new THREE.SphereGeometry(0.3, 16, 16);
    const earMaterial = new THREE.MeshLambertMaterial({ color: 0x654321 });
    
    const leftEar = new THREE.Mesh(earGeometry, earMaterial);
    leftEar.position.set(-0.8, 2, 0);
    group.add(leftEar);
    
    const rightEar = new THREE.Mesh(earGeometry, earMaterial);
    rightEar.position.set(0.8, 2, 0);
    group.add(rightEar);
    
    // NEWSOYES
    const eyeGeometry = new THREE.SphereGeometry(0.1, 16, 16);
    const eyeMaterial = new THREE.MeshLambertMaterial({ color: 0x000000 });
    
    const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    leftEye.position.set(-0.3, 1.7, 0.8);
    group.add(leftEye);
    
    const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    rightEye.position.set(0.3, 1.7, 0.8);
    group.add(rightEye);
    
    // NEWSOYES
    const bodyGeometry = new THREE.CylinderGeometry(0.8, 0.6, 2, 32);
    const bodyMaterial = new THREE.MeshLambertMaterial({ color: 0x8B4513 });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.position.y = 0;
    group.add(body);
    
    // NEWSOYES
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
    
    // NEWSOYES
    const legGeometry = new THREE.CylinderGeometry(0.25, 0.2, 1.2, 16);
    const legMaterial = new THREE.MeshLambertMaterial({ color: 0x8B4513 });
    
    const leftLeg = new THREE.Mesh(legGeometry, legMaterial);
    leftLeg.position.set(-0.4, -1.6, 0);
    group.add(leftLeg);
    
    const rightLeg = new THREE.Mesh(legGeometry, legMaterial);
    rightLeg.position.set(0.4, -1.6, 0);
    group.add(rightLeg);
    
    // NEWSOYES
    const tailGeometry = new THREE.CylinderGeometry(0.1, 0.05, 1.5, 16);
    const tailMaterial = new THREE.MeshLambertMaterial({ color: 0x654321 });
    const tail = new THREE.Mesh(tailGeometry, tailMaterial);
    tail.position.set(0, 0, -1.2);
    tail.rotation.x = Math.PI / 2;
    group.add(tail);
    
    scene.add(group);
    currentModel = group;
}

        // NEWSOYES
function createEggModel() {
    const group = new THREE.Group();
    
    // NEWSOYES
    const whiteGeometry = new THREE.SphereGeometry(1.2, 32, 32);
    const whiteMaterial = new THREE.MeshLambertMaterial({ color: 0xF5F5DC });
    const white = new THREE.Mesh(whiteGeometry, whiteMaterial);
    white.scale.set(1, 1.3, 1);
    group.add(white);
    
    // NEWSOYES
    const yolkGeometry = new THREE.SphereGeometry(0.6, 32, 32);
    const yolkMaterial = new THREE.MeshLambertMaterial({ color: 0xFFD700 });
    const yolk = new THREE.Mesh(yolkGeometry, yolkMaterial);
    yolk.position.y = 0.3;
    group.add(yolk);
    
    // NEWSOYES
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

// NEWSOYES
function createChalkModel() {
    const group = new THREE.Group();
    
    // NEWSOYES
    const chalkGeometry = new THREE.CylinderGeometry(0.3, 0.3, 2, 16);
    const chalkMaterial = new THREE.MeshLambertMaterial({ color: 0xF5F5DC });
    const chalk = new THREE.Mesh(chalkGeometry, chalkMaterial);
    group.add(chalk);
    
    // NEWSOYES
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

// NEWSOYES
function createPrangModel() {
    const group = new THREE.Group();
    
    // NEWSOYES
    const baseGeometry = new THREE.BoxGeometry(3, 0.5, 3);
    const baseMaterial = new THREE.MeshLambertMaterial({ color: 0xCD853F });
    const base = new THREE.Mesh(baseGeometry, baseMaterial);
    base.position.y = -1.5;
    group.add(base);
    
    // NEWSOYES
    const mainPrangGeometry = new THREE.ConeGeometry(1, 3, 8);
    const mainPrangMaterial = new THREE.MeshLambertMaterial({ color: 0xCD853F });
    const mainPrang = new THREE.Mesh(mainPrangGeometry, mainPrangMaterial);
    mainPrang.position.y = 0.5;
    group.add(mainPrang);
    
    // NEWSOYES
    const sidePrangGeometry = new THREE.ConeGeometry(0.6, 2, 8);
    const sidePrangMaterial = new THREE.MeshLambertMaterial({ color: 0xCD853F });
    
    const leftPrang = new THREE.Mesh(sidePrangGeometry, sidePrangMaterial);
    leftPrang.position.set(-1.5, 0, 0);
    group.add(leftPrang);
    
    const rightPrang = new THREE.Mesh(sidePrangGeometry, sidePrangMaterial);
    rightPrang.position.set(1.5, 0, 0);
    group.add(rightPrang);
    
    // NEWSOYES
    const topGeometry = new THREE.SphereGeometry(0.2, 16, 16);
    const topMaterial = new THREE.MeshLambertMaterial({ color: 0xFFD700 });
    const top = new THREE.Mesh(topGeometry, topMaterial);
    top.position.y = 2.5;
    group.add(top);
    
    scene.add(group);
    currentModel = group;
}

// NEWSOYES
function createDamModel() {
    const group = new THREE.Group();
    
    // NEWSOYES
    const damGeometry = new THREE.BoxGeometry(4, 2, 0.5);
    const damMaterial = new THREE.MeshLambertMaterial({ color: 0x4682B4 });
    const dam = new THREE.Mesh(damGeometry, damMaterial);
    dam.position.y = 0;
    group.add(dam);
    
    // NEWSOYES
    const waterGeometry = new THREE.BoxGeometry(3, 1, 2);
    const waterMaterial = new THREE.MeshLambertMaterial({ 
        color: 0x1E90FF,
        transparent: true,
        opacity: 0.7
    });
    const water = new THREE.Mesh(waterGeometry, waterMaterial);
    water.position.set(0, -0.5, 1);
    group.add(water);
    
    // NEWSOYES
    const mountainGeometry = new THREE.ConeGeometry(1.5, 2, 8);
    const mountainMaterial = new THREE.MeshLambertMaterial({ color: 0x228B22 });
    const mountain = new THREE.Mesh(mountainGeometry, mountainMaterial);
    mountain.position.set(0, 0, -2);
    group.add(mountain);
    
    scene.add(group);
    currentModel = group;
}

// NEWSOYES
function createMountainModel() {
    const group = new THREE.Group();
    
    // NEWSOYES
    const mainMountainGeometry = new THREE.ConeGeometry(2, 4, 8);
    const mainMountainMaterial = new THREE.MeshLambertMaterial({ color: 0x228B22 });
    const mainMountain = new THREE.Mesh(mainMountainGeometry, mainMountainMaterial);
    mainMountain.position.y = 0;
    group.add(mainMountain);
    
    // NEWSOYES
    const sideMountainGeometry = new THREE.ConeGeometry(1, 2.5, 8);
    const sideMountainMaterial = new THREE.MeshLambertMaterial({ color: 0x32CD32 });
    
    const leftMountain = new THREE.Mesh(sideMountainGeometry, sideMountainMaterial);
    leftMountain.position.set(-2, -0.5, 0);
    group.add(leftMountain);
    
    const rightMountain = new THREE.Mesh(sideMountainGeometry, sideMountainMaterial);
    rightMountain.position.set(2, -0.5, 0);
    group.add(rightMountain);
    
    // NEWSOYES
    const snowGeometry = new THREE.SphereGeometry(0.3, 16, 16);
    const snowMaterial = new THREE.MeshLambertMaterial({ color: 0xFFFFFF });
    const snow = new THREE.Mesh(snowGeometry, snowMaterial);
    snow.position.y = 2.5;
    group.add(snow);
    
    scene.add(group);
    currentModel = group;
}

// NEWSOYES
function loadGLBModel(modelPath) {
    console.log('Starting to load GLB model from:', modelPath);
    const loader = new THREE.GLTFLoader();
    
            // NEWSOYES
    showLoadingIndicator();
    
    loader.load(
        modelPath,
        function (gltf) {
            console.log('GLB model loaded successfully!');
            console.log('Model scene:', gltf.scene);
            console.log('Animations:', gltf.animations);
            
            // NEWSOYES
            hideLoadingIndicator();
            
            // NEWSOYES
            if (currentModel) {
                scene.remove(currentModel);
            }
            
            const model = gltf.scene;
            
            // NEWSOYES
            const box = new THREE.Box3().setFromObject(model);
            const size = box.getSize(new THREE.Vector3());
            const maxDim = Math.max(size.x, size.y, size.z);
            const scale = 3 / maxDim; // NEWSOYES
            model.scale.setScalar(scale);
            
            console.log('Model scaled by:', scale);
            console.log('Model size:', size);
            
            // NEWSOYES
            const center = box.getCenter(new THREE.Vector3());
            model.position.sub(center.multiplyScalar(scale));
            
            // NEWSOYES
            model.traverse((child) => {
                if (child.isMesh) {
                    child.castShadow = true;
                    child.receiveShadow = true;
                    
                    // NEWSOYES
                    if (child.material) {
                        child.material.envMapIntensity = 1;
                        child.material.needsUpdate = true;
                    }
                }
            });
            
            scene.add(model);
            currentModel = model;
            
            console.log('Model added to scene');
            
            // NEWSOYES
            if (gltf.animations && gltf.animations.length > 0) {
                const mixer = new THREE.AnimationMixer(model);
                const action = mixer.clipAction(gltf.animations[0]);
                action.play();
                
                // NEWSOYES
                currentMixer = mixer;
                console.log('Animation started');
            }
        },
        function (progress) {
                // NEWSOYES
            console.log('Loading progress:', (progress.loaded / progress.total * 100).toFixed(2) + '%');
            updateLoadingProgress(progress);
        },
        function (error) {
            // NEWSOYES
            console.error('Error loading GLB model:', error);
            hideLoadingIndicator();
            showErrorMessage('ไม่สามารถโหลดโมเดล 3D ได้: ' + error.message);
        }
    );
}

// NEWSOYES
function showLoadingIndicator() {
    const container = document.getElementById('modelContainer');
    const loadingDiv = document.createElement('div');
    loadingDiv.id = 'loadingIndicator';
    loadingDiv.innerHTML = `
        <div class="loading-content">
            <div class="loading-spinner"></div>
            <p>กำลังโหลดโมเดล 3D...</p>
            <div class="loading-progress">
                <div class="progress-bar"></div>
            </div>
        </div>
    `;
    container.appendChild(loadingDiv);
}

// NEWSOYES
function hideLoadingIndicator() {
    const loadingDiv = document.getElementById('loadingIndicator');
    if (loadingDiv) {
        loadingDiv.remove();
    }
}

// NEWSOYES
function updateLoadingProgress(progress) {
    const progressBar = document.querySelector('.progress-bar');
    if (progressBar) {
        const percent = (progress.loaded / progress.total) * 100;
        progressBar.style.width = percent + '%';
    }
}

// NEWSOYES
function showErrorMessage(message) {
    const container = document.getElementById('modelContainer');
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.innerHTML = `
        <div class="error-content">
            <p>⚠️ ${message}</p>
            <button onclick="this.parentElement.parentElement.remove()">ปิด</button>
        </div>
    `;
    container.appendChild(errorDiv);
}

// NEWSOYES
function animate() {
    requestAnimationFrame(animate);
    
    if (currentModel) {
        currentModel.rotation.y += 0.01;
    }
    
    // NEWSOYES
    if (currentMixer) {
        currentMixer.update(0.016); // NEWSOYES
    }
    
    if (controls) {
        controls.update();
    }
    
    if (renderer) {
        renderer.render(scene, camera);
    }
}

// NEWSOYES
function onWindowResize() {
    const container = document.getElementById('modelContainer');
    if (camera && renderer && container) {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    }
}

// NEWSOYES
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

    // NEWSOYES
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

function downloadModel(itemKey) {
    const modelPath = `models/${itemKey}.glb`;
    const link = document.createElement('a');
    link.href = modelPath;
    link.download = `${itemData[itemKey].title}.glb`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// ฟังก์ชันแสดง 360° View
function show360View(itemKey) {
    const item = itemData[itemKey];
    
    // ข้อมูลพิกัดของแต่ละสถานที่ (พิกัดจริง)
    const locations = {
        monkey: { lat: 14.802163674038972, lng: 100.61499995898315, name: "ลิงลพบุรี" },
        "salted-egg": { lat: 14.817688391032927, lng: 100.63196156773982, name: "ไข่เค็มดินสอพอง" },
        chalk: { lat: 14.810603225433391, lng: 100.63324697455955, name: "ดินสอพอง" },
        prang: { lat: 14.802963886587168, lng: 100.6140206121651, name: "ปรางค์สามยอด" },
        dam: { lat: 14.861802503931683, lng: 101.06626204855486, name: "เขื่อนป่าสักชลสิทธิ์" },
        mountain: { lat: 14.9649345392816, lng: 100.69977040569555, name: "เขาวงพระจันทร์" }
    };
    
    const location = locations[itemKey];
    
    // สร้าง URL สำหรับ Google Street View
    const streetViewUrl = `https://www.google.com/maps/@${location.lat},${location.lng},3a,75y,0h,90t/data=!3m6!1e1!3m4!1s!2e0!7i16384!8i8192`;
    
    // เปิดในแท็บใหม่
    window.open(streetViewUrl, '_blank');
    
    // แสดงข้อความแจ้งเตือน
    alert(`กำลังเปิด 360° View ของ ${location.name}\nหากไม่พบ Street View ให้ลองค้นหาใน Google Maps`);
}

// ฟังก์ชันแสดงวัฒนธรรมที่เกี่ยวข้อง
function showRelatedCulture(itemKey) {
    const item = itemData[itemKey];
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    
    if (!item) {
        alert('ไม่พบข้อมูลสำหรับรายการนี้');
        return;
    }
    
    let cultureHTML = `
        <div class="culture-section">
            <h3>📚 วัฒนธรรมที่เกี่ยวข้อง - ${item.title}</h3>
            
            <div class="culture-item">
                <h4>📖 ประวัติศาสตร์</h4>
                <p>${item.history}</p>
            </div>
            
            <div class="culture-item">
                <h4>🎭 วัฒนธรรมที่เกี่ยวข้อง</h4>
                <ul>
                    ${item.relatedCulture.map(culture => `<li>${culture}</li>`).join('')}
                </ul>
            </div>
            
            <div class="culture-item">
                <h4>🎉 งานเทศกาลที่เกี่ยวข้อง</h4>
                <ul>
                    ${item.festivals.map(festival => `<li>${festival}</li>`).join('')}
                </ul>
            </div>
            
            <div class="culture-buttons">
                <button onclick="closeModal()" class="btn btn-primary">
                    ← กลับไปหน้าหลัก
                </button>
                <button onclick="show360View('${itemKey}')" class="btn btn-secondary">
                    🌍 ดู 360° View
                </button>
            </div>
        </div>
    `;
    
    modalContent.innerHTML = cultureHTML;
    modal.style.display = 'block';
}

// ข้อมูลเกมส์จับคู่วัฒนธรรม
const cultureMatchingGame = {
    pairs: [
        { id: 1, name: "ลิงลพบุรี", image: "🐒", description: "สัญลักษณ์ของเมืองลพบุรี" },
        { id: 2, name: "ปรางค์สามยอด", image: "🏛️", description: "โบราณสถานสำคัญ" },
        { id: 3, name: "ไข่เค็ม", image: "🥚", description: "สินค้าขึ้นชื่อ" },
        { id: 4, name: "ดินสอพอง", image: "🖍️", description: "วัตถุดิบทำไข่เค็ม" },
        { id: 5, name: "เขื่อนป่าสัก", image: "💧", description: "เขื่อนดินที่ยาวที่สุด" },
        { id: 6, name: "เขาวงพระจันทร์", image: "⛰️", description: "ภูเขาศักดิ์สิทธิ์" }
    ],
    currentScore: 0,
    totalPairs: 6,
    flippedCards: [],
    matchedPairs: []
};

// ข้อมูล Quiz ลพบุรี
const lopburiQuiz = {
    questions: [
        {
            question: "ลิงแสมในลพบุรีเป็นสัญลักษณ์ของอะไร?",
            options: ["ความเจริญ", "ความศักดิ์สิทธิ์", "การท่องเที่ยว", "การเกษตร"],
            correct: 2,
            explanation: "ลิงแสมเป็นสัญลักษณ์การท่องเที่ยวที่สำคัญของลพบุรี"
        },
        {
            question: "ปรางค์สามยอดสร้างขึ้นในสมัยใด?",
            options: ["สุโขทัย", "อยุธยา", "ขอม", "รัตนโกสินทร์"],
            correct: 2,
            explanation: "สร้างขึ้นในสมัยขอมแบบบายน"
        },
        {
            question: "ไข่เค็มลพบุรีใช้ดินสอพองเพื่ออะไร?",
            options: ["เพิ่มรสชาติ", "เก็บรักษา", "สีสวย", "ป้องกันเชื้อโรค"],
            correct: 1,
            explanation: "ดินสอพองช่วยในการเก็บรักษาไข่เค็ม"
        },
        {
            question: "เขื่อนป่าสักชลสิทธิ์เป็นเขื่อนประเภทใด?",
            options: ["เขื่อนคอนกรีต", "เขื่อนดิน", "เขื่อนหิน", "เขื่อนไม้"],
            correct: 1,
            explanation: "เป็นเขื่อนดินที่ยาวที่สุดในประเทศไทย"
        },
        {
            question: "เขาวงพระจันทร์มีบันไดกี่ขั้น?",
            options: ["2,790", "3,790", "4,790", "5,790"],
            correct: 1,
            explanation: "มีบันได 3,790 ขั้น"
        }
    ],
    currentQuestion: 0,
    score: 0
};

// ฟังก์ชันแสดงเกมส์จับคู่วัฒนธรรม
function showMatchingGame() {
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    
    // สร้างการ์ดสำหรับเกมส์
    const cards = [...cultureMatchingGame.pairs, ...cultureMatchingGame.pairs]
        .sort(() => Math.random() - 0.5)
        .map((item, index) => ({ ...item, cardId: index }));
    
    let gameHTML = `
        <div class="game-section">
            <h3>🎮 เกมส์จับคู่วัฒนธรรมลพบุรี</h3>
            <div class="game-info">
                <span>คะแนน: <span id="gameScore">0</span>/${cultureMatchingGame.totalPairs}</span>
                <button onclick="resetMatchingGame()" class="btn btn-primary">🔄 เริ่มใหม่</button>
            </div>
            <div class="matching-grid">
                ${cards.map(card => `
                    <div class="card" data-card-id="${card.cardId}" data-pair-id="${card.id}" onclick="flipCard(${card.cardId}, ${card.id})">
                        <div class="card-inner">
                            <div class="card-front">❓</div>
                            <div class="card-back">
                                <div class="card-emoji">${card.image}</div>
                                <div class="card-name">${card.name}</div>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
            <div class="game-buttons">
                <button onclick="showModal('games')" class="btn btn-secondary">← กลับไปเมนูเกมส์</button>
            </div>
        </div>
    `;
    
    modalContent.innerHTML = gameHTML;
    modal.style.display = 'block';
    
    // รีเซ็ตเกมส์
    cultureMatchingGame.currentScore = 0;
    cultureMatchingGame.flippedCards = [];
    cultureMatchingGame.matchedPairs = [];
    updateGameScore();
}

// ฟังก์ชันพลิกการ์ด
function flipCard(cardId, pairId) {
    const card = document.querySelector(`[data-card-id="${cardId}"]`);
    if (!card || card.classList.contains('flipped') || card.classList.contains('matched')) {
        return;
    }
    
    card.classList.add('flipped');
    cultureMatchingGame.flippedCards.push({ cardId, pairId, element: card });
    
    if (cultureMatchingGame.flippedCards.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

// ฟังก์ชันตรวจสอบการจับคู่
function checkMatch() {
    const [card1, card2] = cultureMatchingGame.flippedCards;
    
    if (card1.pairId === card2.pairId) {
        // จับคู่สำเร็จ
        card1.element.classList.add('matched');
        card2.element.classList.add('matched');
        cultureMatchingGame.matchedPairs.push(card1.pairId);
        cultureMatchingGame.currentScore++;
        updateGameScore();
        
        if (cultureMatchingGame.currentScore === cultureMatchingGame.totalPairs) {
            setTimeout(() => {
                alert('🎉 ยินดีด้วย! คุณจับคู่สำเร็จทั้งหมด!');
            }, 300);
        }
    } else {
        // จับคู่ไม่สำเร็จ
        card1.element.classList.remove('flipped');
        card2.element.classList.remove('flipped');
    }
    
    cultureMatchingGame.flippedCards = [];
}

// ฟังก์ชันอัปเดตคะแนนเกมส์
function updateGameScore() {
    const scoreElement = document.getElementById('gameScore');
    if (scoreElement) {
        scoreElement.textContent = cultureMatchingGame.currentScore;
    }
}

// ฟังก์ชันรีเซ็ตเกมส์จับคู่
function resetMatchingGame() {
    showMatchingGame();
}

// ฟังก์ชันแสดง Quiz ลพบุรี
function showLopburiQuiz() {
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    
    const currentQ = lopburiQuiz.questions[lopburiQuiz.currentQuestion];
    
    let quizHTML = `
        <div class="quiz-section">
            <h3>🧠 Quiz เกี่ยวกับลพบุรี</h3>
            <div class="quiz-info">
                <span>คำถาม: ${lopburiQuiz.currentQuestion + 1}/${lopburiQuiz.questions.length}</span>
                <span>คะแนน: ${lopburiQuiz.score}</span>
            </div>
            <div class="question-container">
                <h4>${currentQ.question}</h4>
                <div class="options">
                    ${currentQ.options.map((option, index) => `
                        <button onclick="selectAnswer(${index})" class="option-btn">
                            ${String.fromCharCode(65 + index)}. ${option}
                        </button>
                    `).join('')}
                </div>
            </div>
            <div class="quiz-buttons">
                <button onclick="showModal('games')" class="btn btn-secondary">← กลับไปเมนูเกมส์</button>
            </div>
        </div>
    `;
    
    modalContent.innerHTML = quizHTML;
    modal.style.display = 'block';
}

// ฟังก์ชันเลือกคำตอบ
function selectAnswer(selectedIndex) {
    const currentQ = lopburiQuiz.questions[lopburiQuiz.currentQuestion];
    const optionBtns = document.querySelectorAll('.option-btn');
    
    // ปิดการคลิกปุ่ม
    optionBtns.forEach(btn => btn.disabled = true);
    
    if (selectedIndex === currentQ.correct) {
        optionBtns[selectedIndex].classList.add('correct');
        lopburiQuiz.score++;
    } else {
        optionBtns[selectedIndex].classList.add('incorrect');
        optionBtns[currentQ.correct].classList.add('correct');
    }
    
    setTimeout(() => {
        lopburiQuiz.currentQuestion++;
        
        if (lopburiQuiz.currentQuestion < lopburiQuiz.questions.length) {
            showLopburiQuiz();
        } else {
            showQuizResult();
        }
    }, 2000);
}

// ฟังก์ชันแสดงผลลัพธ์ Quiz
function showQuizResult() {
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    
    const percentage = Math.round((lopburiQuiz.score / lopburiQuiz.questions.length) * 100);
    let message = '';
    
    if (percentage >= 80) {
        message = '🎉 ยอดเยี่ยม! คุณรู้จักลพบุรีดีมาก!';
    } else if (percentage >= 60) {
        message = '👍 ดีมาก! คุณรู้จักลพบุรีค่อนข้างดี';
    } else {
        message = '📚 ยังมีอะไรให้เรียนรู้เพิ่มเติมเกี่ยวกับลพบุรีอีกมาก';
    }
    
    let resultHTML = `
        <div class="quiz-result">
            <h3>🏆 ผลลัพธ์ Quiz</h3>
            <div class="result-info">
                <h4>${message}</h4>
                <p>คะแนน: ${lopburiQuiz.score}/${lopburiQuiz.questions.length} (${percentage}%)</p>
            </div>
            <div class="result-buttons">
                <button onclick="resetQuiz()" class="btn btn-primary">🔄 เล่นใหม่</button>
                <button onclick="showModal('games')" class="btn btn-secondary">← กลับไปเมนูเกมส์</button>
            </div>
        </div>
    `;
    
    modalContent.innerHTML = resultHTML;
    modal.style.display = 'block';
}

// ฟังก์ชันรีเซ็ต Quiz
function resetQuiz() {
    lopburiQuiz.currentQuestion = 0;
    lopburiQuiz.score = 0;
    showLopburiQuiz();
}

// ฟังก์ชันแสดงเมนูเกมส์
function showGamesMenu() {
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    
    let gamesHTML = `
        <div class="games-menu">
            <h3>🎮 เกมส์และกิจกรรม</h3>
            <div class="games-grid">
                <div class="game-card" onclick="showMatchingGame()">
                    <div class="game-icon">🎯</div>
                    <h4>เกมส์จับคู่วัฒนธรรม</h4>
                    <p>จับคู่วัฒนธรรมลพบุรีให้ถูกต้อง</p>
                </div>
                <div class="game-card" onclick="showLopburiQuiz()">
                    <div class="game-icon">🧠</div>
                    <h4>Quiz ลพบุรี</h4>
                    <p>ทดสอบความรู้เกี่ยวกับลพบุรี</p>
                </div>
            </div>
            <div class="games-buttons">
                <button onclick="closeModal()" class="btn btn-secondary">← กลับไปหน้าหลัก</button>
            </div>
        </div>
    `;
    
    modalContent.innerHTML = gamesHTML;
    modal.style.display = 'block';
}

// ฟังก์ชันแสดง Modal ทั่วไป
function showModal(itemKey) {
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    
    // ตรวจสอบว่าเป็นเกมส์หรือไม่
    if (itemKey === 'games') {
        showGamesMenu();
        return;
    }
    
    const item = itemData[itemKey];
    
    let modalHTML = `
        <div class="modal-header">
            <h2>${item.title}</h2>
            <button onclick="closeModal()" class="close-btn">&times;</button>
        </div>
        <div class="modal-body">
            <p>${item.description}</p>
            <div class="modal-buttons">
                <button onclick="downloadModel('${itemKey}')" class="btn btn-primary">
                    📥 ดาวน์โหลด 3D Model
                </button>
                <button onclick="show360View('${itemKey}')" class="btn btn-secondary">
                    🌍 ดู 360° View
                </button>
                <button onclick="showRelatedCulture('${itemKey}')" class="btn btn-culture">
                    📚 วัฒนธรรมที่เกี่ยวข้อง
                </button>
            </div>
        </div>
    `;
    
    modalContent.innerHTML = modalHTML;
    modal.style.display = 'block';
}

// ฟังก์ชันปิด Modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// ====== MONKEY GLOBAL (ปุ่มเพิ่มลิง) ======
let monkeys = [];
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function createMonkey(x, y) {
  const monkey = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  monkey.setAttribute('width', 60);
  monkey.setAttribute('height', 60);
  monkey.setAttribute('viewBox', '0 0 60 60');
  monkey.classList.add('monkey-global');
  monkey.style.left = x + 'px';
  monkey.style.top = y + 'px';
  monkey.style.cursor = 'default';
  monkey.innerHTML = `
    <circle cx="30" cy="35" r="18" fill="#a67c52"/>
    <ellipse cx="30" cy="25" rx="13" ry="12" fill="#a67c52"/>
    <ellipse cx="18" cy="25" rx="5" ry="6" fill="#a67c52"/>
    <ellipse cx="42" cy="25" rx="5" ry="6" fill="#a67c52"/>
    <ellipse cx="30" cy="30" rx="8" ry="7" fill="#fff3e0"/>
    <ellipse cx="24" cy="28" rx="2.5" ry="3" fill="#fff"/>
    <ellipse cx="36" cy="28" rx="2.5" ry="3" fill="#fff"/>
    <circle cx="24" cy="28" r="1.2" fill="#333"/>
    <circle cx="36" cy="28" r="1.2" fill="#333"/>
    <ellipse cx="30" cy="34" rx="3" ry="2" fill="#e07a5f"/>
    <ellipse cx="20" cy="45" rx="4" ry="2.5" fill="#a67c52"/>
    <ellipse cx="40" cy="45" rx="4" ry="2.5" fill="#a67c52"/>
    <ellipse cx="12" cy="38" rx="3" ry="7" fill="#a67c52"/>
    <ellipse cx="48" cy="38" rx="3" ry="7" fill="#a67c52"/>
  `;
  document.body.appendChild(monkey);
  monkey._jump = {
    vx: randomInt(-3, 3) || 2,
    vy: -randomInt(8, 16),
    gravity: 0.7 + Math.random()*0.2,
    ground: false
  };
  return monkey;
}
function moveMonkey(monkey) {
  let x = parseFloat(monkey.style.left);
  let y = parseFloat(monkey.style.top);
  let st = monkey._jump;
  const w = window.innerWidth;
  const h = window.innerHeight;
  if (!st.ground) {
    st.vy += st.gravity;
    x += st.vx;
    y += st.vy;
    if (y > h - 60) {
      y = h - 60;
      st.vy = -randomInt(8, 16);
      st.vx = randomInt(-3, 3) || 2;
    }
    if (x < 0) { x = 0; st.vx *= -1; }
    if (x > w - 60) { x = w - 60; st.vx *= -1; }
    monkey.style.left = x + 'px';
    monkey.style.top = y + 'px';
  }
}
function animateMonkeys() {
  monkeys.forEach(monkey => moveMonkey(monkey));
  requestAnimationFrame(animateMonkeys);
}
function spawnMonkey() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  const x = randomInt(0, Math.max(0, w - 60));
  const y = h - 60;
  const monkey = createMonkey(x, y);
  monkeys.push(monkey);
}
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    spawnMonkey();
    animateMonkeys();
  }, 500);
  // ปุ่มเพิ่มลิง
  const addMonkeyBtn = document.getElementById('add-monkey-btn');
  if (addMonkeyBtn) {
    addMonkeyBtn.onclick = () => spawnMonkey();
  }
});

// ข่าวสาร overlay toggle (slide-in)
window.addEventListener('DOMContentLoaded', () => {
  const newsSidebar = document.getElementById('news-sidebar');
  const newsBtn = document.getElementById('news-toggle-btn');
  const newsClose = document.getElementById('news-close-btn');
  if (newsBtn && newsSidebar) {
    newsBtn.onclick = () => {
      newsSidebar.style.display = 'flex';
      setTimeout(() => newsSidebar.classList.add('open'), 10);
    };
  }
  if (newsClose && newsSidebar) {
    newsClose.onclick = () => {
      newsSidebar.classList.remove('open');
      setTimeout(() => newsSidebar.style.display = 'none', 400);
    };
  }
});

// ====== REALTIME CHAT (required name, sync) ======
const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
const chatMessages = document.getElementById('chat-messages');
const chatName = document.getElementById('chat-name');

function addChatMessage(msg) {
  const div = document.createElement('div');
  div.className = 'chat-message';
  div.innerHTML = `<b>${msg.name}:</b> ${msg.text}`;
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

chatRef.off(); // reset listener
chatRef.limitToLast(50).on('child_added', (snapshot) => {
  const msg = snapshot.val();
  addChatMessage(msg);
});

chatForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = chatInput.value.trim();
  const name = chatName.value.trim();
  if (!name) {
    chatName.focus();
    chatName.setCustomValidity('กรุณากรอกชื่อผู้ส่ง');
    chatName.reportValidity();
    return;
  } else {
    chatName.setCustomValidity('');
  }
  if (text) {
    const msg = { text, name };
    chatRef.push(msg);
    chatInput.value = '';
  }
}); 