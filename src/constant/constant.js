export class PortfolioEntity {
    constructor(title, description) {
        this.title = title
        this.description = description
    }
}

const Constant = {
    Title: "Senior Back-end Developer",
    Description: [
        "Master of information technology at FPT University",
        "Senior Back-end Developer with nearly 5 years of experience in developing and building back-end applications using Golang, NodeJS and Python. Design and build large-scale systems and microservices architecture",
        "Devops Engineer with nearly 2 years , have certificates of AWS Developer Associate DVA-C02 and AWS Devops Professional DOP-C02",
        "AI Engineer with 1 and a half years , have basic knowledge about training deep learning models and NLP based on Neural Network and its variations. Have deep learning certifications on coursera",
    ],
    ImageUrl: "/image_me.png",
    Portfolio: {
        WebApp: [
            new PortfolioEntity("Demo Web App", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsus of Lorem Ipsum"),
            new PortfolioEntity("Demo Web App", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsus of Lorem Ipsum"),
        ],
        AI: [
            new PortfolioEntity("Demo AI App", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsus of Lorem Ipsum"),
            new PortfolioEntity("Demo AI App", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsus of Lorem Ipsum"),
        ],
        Devops: [
            new PortfolioEntity("Demo Devops App", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsus of Lorem Ipsum"),
            new PortfolioEntity("Demo Devops App", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsus of Lorem Ipsum"),
        ],
        DataScience: [
            new PortfolioEntity("Demo DataScience App", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsus of Lorem Ipsum"),
            new PortfolioEntity("Demo DataScience App", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsus of Lorem Ipsum"),
        ]
    },
    Services: {
        WebServer:{
            Title: "Backend Server",
            Description:"Have nearly 5 years of experience building and deploying back-end applications and APIs in 3 languages Golang, NodeJS and Python. Good understanding of microservices model and large-scale system."
        },
        AI:{
            Title: "Artificial Intelligence",
            Description:"Research and Train Artificial Intelligent models about object detection, image classification, and predition by  neural network and some different variant likes CNN, RNN, YOLO. Have general knowledge about some AI libraries or tools likes MediaPipe, Roboflow."
        },
        Devops:{
            Title: "Devops",
            Description:"Have general knowledge about devops and deploying applications to the cloud such as AWS and GCP. Integrate CI/CD pipeline for automated and continuous application deployment. Certified in AWS Develop Associate DVA-C02."
        },
        Data:{
            Title: "Data Science",
            Description:"Research, explore and visualize data, apply machine learning techniques to train machine learning models and build recommendation systems"
        }
    },
    Phone:"0946515847",
    Location:"Phu Nhuan, Ho Chi Minh City, VietName",
    Email:"tqhuy1996.developer@gmail.com"
};

export default Constant;