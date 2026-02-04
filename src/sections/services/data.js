import { CiCloudOn } from "react-icons/ci";
// import {RiReactjsLine} from 'react-icons/ri'
import {FaServer} from 'react-icons/fa'
// import {AiFillAppstore} from 'react-icons/ai'


const data = [
    {
        id: 1, icon: <CiCloudOn/>, title: 'DevOps & Cloud Engineering', desc: "I automate deployments, monitor infrastructure, and ensure scalability using tools like Docker, Kubernetes, Terraform and cloud platforms like AWS and Azure. Your product will run smoothly, securely, and reliably."
    },
    // {
    //     id: 2, icon: <RiReactjsLine/>, title: 'Frontend Development', desc: "Your product will look good and will be accessible on all devices, including mobile phones, tablets, and desktop."
    // },
    {
        id: 3, icon: <FaServer/>, title: 'Backend Development', desc: "The security of your business/product is taken seriously right from the start of the project. I will make sure your website/app is secure from attacks."
    },
    // {
    //     id: 4, icon: <AiFillAppstore/>, title: 'App Development', desc: 'Unlike other developers in the market, I will building an app that runs on both IOS and Android devices without any extra cost to you.'
    // }
]

export default data;