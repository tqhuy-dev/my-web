export class PortfolioEntity {
    constructor(title, description,image) {
        this.title = title
        this.description = description
        this.image = image
    }
}

const Constant = {
    Title: "Master of Software Engineer, Senior Back-end Developer, AI Engineer",
    AboutMe: [
        "Senior Back-end Developer with nearly 5 years of experience developing and building back-end applications using Golang at many large technology companies (Sendo, GiaoHangNhanh). A good coder in some famous language (Java, NodeJS, Python, C#),",
        "Experienced in designing and developing high performance large-scale web services handling thousands of requests, domain-driven architecture, event-driven architecture, and microservice architecture",
        "Have basic knowledge of devops with nearly 2 years of experience supporting CI/CD deployment of microservice systems on AWS, GCP, currently taking 2 courses of AWS Developer Associate DVA-C02 and AWS Devops Professional DOP-C02",
        "AI Engineer with 1 and a half years , have basic knowledge about training deep learning models and NLP based on Neural Network and its variations. Have deep learning certifications on coursera",
    ],

    ImageUrl: "/image_me.png",
    Portfolio: {
        WebApp: [
            new PortfolioEntity("Order Management System", "Design and develop Order Management System at Sendo Company using Golang. Use ElasticSearch for order search feature and Message-Queue, Pub/Sub model for order synchronization","/order_mgt.png"),
            new PortfolioEntity("Order Statistics System", "Design and develop Order Statistics System at Sendo Company using Golang and Python. Apply Airflow and PySpark for data collection, analysis, and data modeling. Use Postgre Timescaled DB to store real-time data and retrieve analytics data by timeline","order_statistics.png"),
        ],
        AI: [
            new PortfolioEntity("Food Ingredients Detection", "Train the AI model to detect food ingredients using YOLO v8, build a dish recommendation system from recognized ingredients. Data is marked and stored on Roboflow","/detection.jpg"),
            new PortfolioEntity("Smart House Demo", "Train AI models to analyze voice, analyze gestures, and predict to automate features in the home, manage and suggest to family members.","/smarthouse.webp"),
        ],
        Devops: [
            new PortfolioEntity("Deploy microservices system with Kubernetes", "Deploy Microservices system to Kubernetes, using tools such as Docker, Jenkins, Circle-ci, Terraform","/k8s_micro.png"),
            new PortfolioEntity("Design and deploy CI/CD Pipelines on Cloud", "Deploy and integrate CI/CD applications into Google and AWS services.","/cicd.png"),
        ],
        DataScience: [
            new PortfolioEntity("Recommendation System", "Collect and model data, use algorithms and techniques such as Cosine Similarity, User-based/Item-based Collaborative to build a recommendation system","/recommendation.png"),
        ]
    },
    Services: {
        WebServer:{
            Title: "Backend Server",
            Description:"Senior Back-end Developer with nearly 5 years of experience developing and building back-end applications using Golang at many large technology companies (Sendo, GiaoHangNhanh). A good coder in some famous language (Java, NodeJS, Python, C#)."
        },
        AI:{
            Title: "Artificial Intelligence",
            Description:"Research and Train Artificial Intelligent models about regression, object detection, image classification,... and predition by  neural network and some different variant likes CNN, RNN, YOLO. Have general knowledge about some AI libraries or tools likes MediaPipe, Tensorflow, Roboflow."
        },
        Devops:{
            Title: "Devops",
            Description:"Have basic knowledge of devops with nearly 2 years of experience supporting CI/CD deployment of microservice systems on AWS, GCP and currently taking 2 courses of AWS Developer Associate DVA-C02 and AWS Devops Professional DOP-C02"
        },
        Data:{
            Title: "Data Engineer",
            Description:"Research, explore and visualize data, apply machine learning techniques to train machine learning models and build recommendation systems"
        }
    },
    Phone:"0946515847",
    Location:"Phu Nhuan, Ho Chi Minh City, VietName",
    Email:"tqhuy1996.developer@gmail.com"
};

export default Constant;