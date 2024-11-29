import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';
import googlecv from '/public/image/googlecv.jpeg';
import teamplay from '/public/image/teamplay.jpeg';
import lamp from '/public/image/lamp.png';
import hackharvard from '/public/image/hackharvard.jpg';


export const projectsData = [
    {
        id: 1,
        name: 'Pixel Device CV Testing',
        description: " CV quality detection and flicker detection ",
        tools: ['Python', 'Pytorch','Tensorflow','Keras','Huggingface','Scikit-learn' ,'OpenCV', 'Jupyter Notebook', 'Numpy', 'Pandas', 'Shell','Git',],
        role: 'Google Research',
        code: 'https://github.com/hc07180011/testing-cv',
        demo: '',
        image: googlecv,
    },
    {
        id: 2,
        name: 'HackHarvard Voice Coding',
        description: 'The Rubber Ducky will always be close to every programmers heart. This project is a tribute to the loyal companion who never failed to alleviate the anxieties and distress of our early programming careers. Our Rubber Ducky is designed to be both an entertaining fidget toy and a visualization tool for a bewildered programmer.',
        tools: ['Python','pyaudio','pydub','pyaudio-devices','Google Speech Recognition','PyQT5','pytorch','transformers','GPT2','shlex'],
        role: 'HackHarvard',
        code: 'https://github.com/Tony363/HackHarvard_voice_coding',
        demo: '',
        image: hackharvard,
    },
    {
        id: 3,
        name: 'LAMP Stack Blog',
        description: 'The Easy Blog site project is a simple PHP, CSS, and JavaScript project. Talking about the project, it has lots of features. A user can post news, blogs, photos. This project is a complete blogging site for the users where there are different categories. It contains a homepage from where users can check the latest news, from programmers and about upcoming programs. There’s a separate tab for blog posts where users can easily check all their news and blogs. The viewer can comment using their accounts. Take note that this project is still in development so please report any kind of bug if you find.',
        tools: ['HTML','CSS','JavaScript','PHP','MySQL','Git','Posqgresql'],
        code: 'https://github.com/Tony363/opensource-final-project',
        role: 'Open Source Course Project',
        demo: '',
        image: lamp,
    },
    {
        id: 4,
        name: 'Sports Video Analytics on Edge device',
        description: "The https://github.com/ultralytics/yolov3 repo contains inference and training code for YOLOv3 in PyTorch. The code works on Linux, MacOS and Windows. Training is done on the COCO dataset by default: https://cocodataset.org/#home. Credit to Joseph Redmon for YOLO: https://pjreddie.com/darknet/yolo/.",
        tools: ['Python','C++','Pytorch','Yolov3','OpenCV-Cpp','OpenCV-python','Jupyter Notebook','Numpy','Pandas','Shell','Git'],
        code: 'https://github.com/Tony363/Teamplay_Yolov3',
        demo: '',
        image: teamplay,
        role: 'AI Specialist Engineer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },