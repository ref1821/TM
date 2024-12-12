import * as THREE from './threejs/three.module.js';
import { STLLoader } from './threejs/STLLoader.js';
import { OrbitControls } from './threejs/OrbitControls.js';

let scene, camera, renderer, object;

function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x707070);

    camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        10000
    );
    camera.position.x = 7;
    camera.position.y = 5;
    camera.position.z = 10;

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    let control = new OrbitControls(camera, renderer.domElement);

    control = control
    let light = new THREE.DirectionalLight(0xffffff);
    light.position.set(0, 3, 10);
    scene.add(light);

    let light2 = new THREE.DirectionalLight(0xffffff);
    light2.position.set(0, -3, -10);
    scene.add(light2);

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
        object.scale.set(0.05, 0.05, 0.05);
        object.position.set(0, 0, 0);
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
