import * as THREE from './threejs/three.module.js';
import { STLLoader } from './threejs/STLLoader.js';
import { OrbitControls } from './threejs/OrbitControls.js';

let scene, camera, renderer, object;

function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);

    camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        10000
    );
    camera.position.x = 0.1;
    camera.position.y = 0.1;
    camera.position.z = 0.1;

    camera.rotation.z = Math.PI / 2;
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight-270);
    document.body.appendChild(renderer.domElement);

    let control = new OrbitControls(camera, renderer.domElement);

    control = control
    let light = new THREE.DirectionalLight(0xffffff);
    light.position.set(0, 3, 10);
    scene.add(light);

    let light2 = new THREE.DirectionalLight(0xffffff);
    light2.position.set(0, -3, -10);
    scene.add(light2);

    let light3 = new THREE.DirectionalLight(0xffffff);
    light3.position.set(0, 0, 0);
    scene.add(light2);
    
	const dirLight = new THREE.DirectionalLight( 0xffffff );
    dirLight.position.set( - 3, 10, - 10 );
    dirLight.castShadow = true;
	dirLight.shadow.camera.top = 2;
	dirLight.shadow.camera.bottom = - 2;
	dirLight.shadow.camera.left = - 2;
	dirLight.shadow.camera.right = 2;
	dirLight.shadow.camera.near = 0.1;
	dirLight.shadow.camera.far = 40;
	scene.add( dirLight );
    animate();
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

export function Showcase(props) {
    const loader = new STLLoader();

    // Crear un contenedor de progreso
    let progressContainer = document.createElement('div');
    progressContainer.style.position = 'absolute';
    progressContainer.style.top = '300px';
    progressContainer.style.left = '100px';
    progressContainer.style.width = '300px';
    progressContainer.style.height = '20px';
    progressContainer.style.backgroundColor = '#ccc';
    progressContainer.style.borderRadius = '5px';
    progressContainer.style.overflow = 'hidden';
    document.body.appendChild(progressContainer);

    let progressBar = document.createElement('div');
    progressBar.style.height = '100%';
    progressBar.style.width = '0%';
    progressBar.style.backgroundColor = '#76c7c0';
    progressContainer.appendChild(progressBar);

    let progressText = document.createElement('p');
    progressText.style.position = 'absolute';
    progressText.style.top = '270px';
    progressText.style.left = '100px';
    progressText.style.color = '#333';
    progressText.style.margin = '0';
    document.body.appendChild(progressText);

    loader.load(
        '/models/' + props.location,
        (model) => {
            console.log('Modelo cargado:', model);

            // Eliminar barra de progreso
            document.body.removeChild(progressContainer);
            document.body.removeChild(progressText);

            // Crear y añadir el objeto
            object = new THREE.Mesh(
                model,
                new THREE.MeshLambertMaterial({ color: 0x808080 })
            );
            object.scale.set(props.scale, props.scale, props.scale);
            object.position.set(props.x, props.y, props.z);
            object.rotation.x = -Math.PI / 2;
            scene.add(object);
            console.log('Objeto agregado a la escena:', object);
        },
        (xhr) => {
            // Actualizar progreso
            const percentComplete = Math.round((xhr.loaded / xhr.total) * 100);
            progressBar.style.width = percentComplete + '%';
            progressText.innerText = `${percentComplete}% cargado`;
            console.log(`${percentComplete}% cargado`);
        },
        (error) => {
            console.error('Error al cargar el modelo:', error);
        }
    );
}

init();
