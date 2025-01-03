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
    renderer.setSize(window.innerWidth, window.innerHeight-200);
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
    let loader = new STLLoader();
    loader.load('/models/'+ props.location, (model) => {
        console.log('Modelo cargado:', model);
        object = new THREE.Mesh(
            model,
            new THREE.MeshLambertMaterial({ color: 0x808080 })
        );
        object.scale.set(props.scale, props.scale, props.scale);
        object.position.set(props.x, props.y, props.z);
        object.rotation.x = -Math.PI / 2;
        scene.add(object);
        console.log('Objeto agregado a la escena:', object);
    }, (xhr) => {
        console.log((xhr.loaded / xhr.total * 100) + '% cargado');
    }, (error) => {
        console.error('Error al cargar el modelo:', error);
    });
}

init();
