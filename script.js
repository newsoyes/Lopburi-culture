// NEWSOYES
const itemData = {
    monkey: {
        title: "ลิงลพบุรี",
        description: "ลิงแสม (Macaca fascicularis) เป็นสัญลักษณ์สำคัญของลพบุรี พบได้ทั่วไปตามโบราณสถาน เช่น ปรางค์สามยอด วัดพระศรีรัตนมหาธาตุ และเป็นที่ดึงดูดนักท่องเที่ยวให้มาเยี่ยมชมและให้อาหารลิงในเมืองลพบุรีทุกปี โดยเฉพาะในงานเลี้ยงโต๊ะจีนลิงที่จัดขึ้นเป็นประจำทุกปี",
        reference: "https://www.lopburi.org/copy-of",
        color: "#8B4513",
        modelType: "glb"
    },
    "salted-egg": {
        title: "ไข่เค็มลพบุรี",
        description: "ไข่เค็มลพบุรี ผลิตจากไข่เป็ดคุณภาพดีและดินสอพองของลพบุรี มีรสชาติอร่อย ไข่แดงมันเยิ้ม นิยมซื้อเป็นของฝากและใช้ประกอบอาหารหลากหลายเมนู เช่น ข้าวต้ม ไข่เค็มต้มยางมะตูม ฯลฯ",
        reference: "https://itech.tru.ac.th/Art/show_4.php",
        color: "#FFD700",
        modelType: "glb"
    },
    chalk: {
        title: "ดินสอพองลพบุรี",
        description: "ดินสอพองลพบุรีเป็นวัตถุดิบสำคัญในการทำไข่เค็มและใช้ในประเพณีสงกรานต์ มีคุณสมบัติพิเศษคือเนื้อละเอียด สีขาวสะอาด และปลอดภัยต่อผิวหนัง เป็นสินค้าขึ้นชื่อของจังหวัดลพบุรี",
        reference: "https://www.ipst.ac.th/news/60772/20240411-limestone-ipst.html",
        color: "#F5F5DC",
        modelType: "glb"
    },
    prang: {
        title: "ปรางค์สามยอด",
        description: "ปรางค์สามยอดเป็นโบราณสถานสำคัญของลพบุรี สร้างขึ้นในสมัยขอมแบบบายน มีลักษณะเป็นปรางค์ 3 องค์เชื่อมต่อกัน เป็นสัญลักษณ์ของเมืองลพบุรีและเป็นที่อยู่อาศัยของลิงจำนวนมาก",
        reference: "https://th.wikipedia.org/wiki/%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%9B%E0%B8%A3%E0%B8%B2%E0%B8%87%E0%B8%84%E0%B9%8C%E0%B8%AA%E0%B8%B2%E0%B8%A1%E0%B8%A2%E0%B8%AD%E0%B8%94",
        color: "#CD853F",
        modelType: "glb"
    },
    dam: {
        title: "เขื่อนป่าสักชลสิทธิ์",
        description: "เขื่อนป่าสักชลสิทธิ์เป็นเขื่อนดินที่ยาวที่สุดในประเทศไทย สร้างขึ้นเพื่อกักเก็บน้ำและป้องกันน้ำท่วมในลุ่มน้ำป่าสัก เป็นแหล่งท่องเที่ยวและจุดชมวิวที่สำคัญของลพบุรี",
        reference: "https://th.wikipedia.org/wiki/%E0%B9%80%E0%B8%82%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%99%E0%B8%9B%E0%B9%88%E0%B8%B2%E0%B8%AA%E0%B8%B1%E0%B8%81%E0%B8%8A%E0%B8%A5%E0%B8%AA%E0%B8%B4%E0%B8%97%E0%B8%98%E0%B8%B4%E0%B9%8C",
        color: "#4682B4",
        modelType: "glb"
    },
    mountain: {
        title: "เขาจีนแล",
        description: "เขาจีนแลเป็นภูเขาสูงที่ตั้งอยู่ทางทิศตะวันตกของเมืองลพบุรี เป็นจุดชมวิวพระอาทิตย์ตกที่สวยงามและเป็นที่ตั้งของวัดเขาจีนแลซึ่งมีพระพุทธรูปองค์ใหญ่ประดิษฐานอยู่",
        reference: "https://www.facebook.com/p/%E0%B8%97%E0%B8%B8%E0%B9%88%E0%B8%87%E0%B8%97%E0%B8%B2%E0%B8%99%E0%B8%95%E0%B8%B0%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B9%80%E0%B8%82%E0%B8%B2%E0%B8%88%E0%B8%B5%E0%B8%99%E0%B9%81%E0%B8%A5%E0%B8%A5%E0%B8%9E%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5-100076063994411/",
        color: "#228B22",
        modelType: "glb"
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
    
    closeBtn.addEventListener('click', function() {
        closeModelModal();
    });

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
            <a href="${glbModels[itemType]}" download style="display:inline-block; margin-top:1rem; padding:0.7rem 1.5rem; background:linear-gradient(45deg,#00ffff,#ff00ff); color:#111; border-radius:6px; font-family:'Orbitron',monospace; font-weight:700; text-decoration:none; box-shadow:0 0 10px #00ffff; transition:all 0.2s;">
                ⬇️ ดาวน์โหลดไฟล์ 3D (.glb)
            </a>
        `;
    } else {
        downloadArea.innerHTML = '';
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