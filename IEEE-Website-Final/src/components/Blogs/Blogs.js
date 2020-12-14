import React, { useEffect } from "react";
import office from '../../img/Blogs/office.jpeg'
import forest from '../../img/Blogs/forest.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Blogs = () => {
    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);
    return (
        <div className="blogs">
            <div className="container">
                <h4 className="center">BLOGS</h4>
                <div className="row">
                    <div className="col s12 m6 l4">
                        <div className="card medium z-depth-5 hoverable" data-aos="fade-down">
                            <div className="card-image waves-effect waves-block waves-light"> 
                                <img src="https://miro.medium.com/max/875/0*8_Pv3q_f3f3Q57da.jpg"/>
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Natural Language Processing: An introduction<i className="material-icons right">more_vert</i></span>
                                <p><a href="https://medium.com/@angadsingh.kataria14/natural-language-processing-an-introduction-b2a5caa39280" target="_blank">View the Full Blog</a></p>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Natural Language Processing: An introduction<i className="material-icons right">close</i></span>
                                <p>NLP began in the 1950s as the intersection of artificial intelligence and linguistics. NLP originally differed from text information retrieval (IR), which utilizes highly scalable statistics-based techniques to index and search large amount of text efficiently. With time, however, NLP and IR have converged. Currently, NLP borrows from several, diverse fields, requiring NLP researchers and developers to broaden their knowledge significantly.</p>
                            </div>
                        </div>

                    </div>
                    <div className="col s12 m6 l8">
                        <div className="card horizontal z-depth-5 hoverable" data-aos="fade-left">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img src="https://miro.medium.com/max/875/0*St_i4c74Cj32bCpM.jpg" />
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Deep Learning in Natural Language Processing<i className="material-icons right">more_vert</i></span>
                                <p><a href="https://medium.com/@angadsingh.kataria14/deep-learning-in-natural-language-processing-24c2c5b47d6" target="_blank">View the Full Blog</a></p>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Deep Learning in Natural Language Processing<i className="material-icons right">close</i></span>
                                <p>Over the last few years, natural language processing has been propelled forward by an increase in use of deep learning models. Nowadays, deep learning (DL), a branch of artificial intelligence, is a complicated algorithm with different network structures, which can capture the features of big data automatically and efficiently.
                                It becomes a prevailing technique in multiple domains including computer vision, natural learning processing, education, pharmacy/medicine, finance and so on. Applications of DL can be boiled down to several major fields: Computer vision (CV), Natural Language Processing (NLP), and Video/Speech Recognition (V/SP). Regarding NLP, in this paper we provide a state-of-the-art summarization on past works that are influential in specific problem domains.</p>
                            </div>
                        </div>

                    </div>
                    <div className="col s12 m6 l8">
                        <div className="card horizontal z-depth-5 hoverable" data-aos="fade-right">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img src="https://miro.medium.com/max/2363/1*7LQ0Zq9mJY-8OrQ2dWA2hw.png" />
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Classification Techniques in Text Mining<i className="material-icons right">more_vert</i></span>
                                <p><a href="https://medium.com/@ishagu10/classification-techniques-in-text-mining-53da1058b9e7" target="_blank">View the Full Blog</a></p>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Classification Techniques in Text Mining<i className="material-icons right">close</i></span>
                                <p>Text mining is the process of extracting knowledge from the large collection of unstructured text data.
With the advancement in technology each day, Text mining has become the key element in Industries to discover new information or help answer specific research questions.
This article gives a brief overview on the classification techniques for mining text data and and various Algorithms used.</p>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="row">
                    <div className="col s12 m6 l4">
                        <div className="card z-depth-4 hoverable" data-aos="fade-up">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img src="https://miro.medium.com/max/611/1*EdhbePRpve3cdc_f8mB6kA.png" />
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Overview: Image Processing and its Applications<i className="material-icons right">more_vert</i></span>
                                <p><a href="https://medium.com/@rishabhbhatia57/overview-image-processing-and-its-applications-e84c1a4fbbc4" target="_blank">View the Full Blog</a></p>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Overview: Image Processing and its Applications<i className="material-icons right">close</i></span>
                                <p>When talking about Image processing, first we need to know what are digital images and how they are formed. So, what are digital images? Digital images can be defined as a function such as — F (x, y). Any digital image can be defined using this function and the function can further be represented using a matrix.</p>
                            </div>
                        </div>

                    </div>
                    <div className="col s12 m6 l4">
                        <div className="card z-depth-4 hoverable" data-aos="fade-down">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img src="https://miro.medium.com/max/753/1*GPTHkobrmLdJGtSQKikaDg.png" />
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Algorithms in Image Processing<i className="material-icons right">more_vert</i></span>
                                <p><a href="https://medium.com/@rishabhbhatia57/algorithms-in-image-processing-d73f4d0b0442" target="_blank">View the Full Blog</a></p>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Algorithms in Image Processing<i className="material-icons right">close</i></span>
                                <p>Algorithms in images processing can be defined as methods that are used to process images to get higher quality images or information in shorter duration of time. The general meaning of algorithms set of instructions for solving a problem or accomplishing a task. So while discussing algorithms in image processing let us first discuss the timeline of image processing and then their applications.</p>
                            </div>
                        </div>

                    </div>
                    <div className="col s12 m6 l4">
                        <div className="card z-depth-4 hoverable" data-aos="fade-up">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWOVY2JnYrf2hJEpYloI8m4xZ3oT64Nt8ZwA&usqp=CAU" />
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Robotic Process Automation — Everything you need to know<i className="material-icons right">more_vert</i></span>
                                <p><a href="https://medium.com/@paragdharadhar/robotic-process-automation-everything-you-need-to-know-148622f741e0" target="_blank">View the Full Blog</a></p>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Robotic Process Automation — Everything you need to know<i className="material-icons right">close</i></span>
                                <p>Hyper-automation deals with the appliance of advanced technologies, including artificial intelligence (AI) and machine learning (ML) to increasingly automate processes and augment humans. Hyper-automation not only extends across a range of tools that can be automated, but also refers to the sophistication of the automation (i.e., discover, analyze, design, automate, measure, monitor, reassess).1 In simple terms, hyper-automation refers to the mixture of automation technologies that exist to reinforce and expand human capabilities.Hyper-automation uses its brain to perform those tasks in a much optimized and smarter manner. This intelligent layer includes different allotropes of AI like natural language processing (NLP), optical character recognition (OCR), and ML. Together, these technologies expand the automation possibilities.</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className="col s12 m6 l4">
                        <div className="card extra large z-depth-4 hoverable" data-aos="fade-up-right">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img src="https://miro.medium.com/max/875/0*56aeFnHn-Be2G8s-.png" />
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Text Mining and Analytics using Natural Language Processing.<i className="material-icons right">more_vert</i></span>
                                <p><a href="https://medium.com/@ishagu10/text-mining-and-analytics-using-natural-language-processing-f2df7233b5b" target="_blank">View the Full Blog</a></p>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Text Mining and Analytics using Natural Language Processing.<i className="material-icons right">close</i></span>
                                <p>Our leap into the online world has a great impact on surveying people based on the growing text data which can provide knowledge into industries, from manufacturing to marketing to life sciences with Text mining and analytics.</p>
                            </div>
                        </div>

                    </div>
                    <div className="col s12 m6 l4">
                        <div className="card small z-depth-4 hoverable" data-aos="fade-up-left">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img src="https://www.alphalake.ai/hs-fs/hubfs/New%20hyper%20automation%20image-1.png?width=839&name=New%20hyper%20automation%20image-1.png" />
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Hyper-Automation — Everything you need to know.<i className="material-icons right">more_vert</i></span>
                                <p><a href="https://medium.com/@paragdharadhar/hyper-automation-everything-you-need-to-know-f68263f3993f" target="_blank">View the Full Blog</a></p>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Hyper-Automation — Everything you need to know.<i className="material-icons right">close</i></span>
                                <p>As defined by Gartner, hyper-automation “deals with the appliance of advanced technologies, including AI and machine learning (ML), to increasingly automate processes and augment humans. Hyper-automation extends across a range of tools that can be automated, but also refers to the sophistication of the automation (i.e., discover, analyze, design, automate, measure, monitor, reassess.)”</p>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m6 l4">
                        <div className="card small z-depth-4 hoverable" data-aos="fade-down-right">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img src="https://101blockchains.com/wp-content/uploads/2018/07/How_Does_a_Blockchain_work.jpg" />
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Blockchain: Everything you need to know<i className="material-icons right">more_vert</i></span>
                                <p><a href="https://medium.com/@nikhilchouhan987/blockchain-everything-you-need-to-know-65efc14f0af9" target="_blank">View the Full Blog</a></p>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Blockchain: Everything you need to know<i className="material-icons right">close</i></span>
                                <p>Blockchain technology is a structure that stores transactional records, also known as the block, of the public in several databases, known as the “chain,” in a network connected through peer-to-peer nodes.
The first manifestation of blockchain technology emerged in 2009 with the Bitcoin blockchain, a secure, censorship-resistant, peer to peer electronic cash system. Because Bitcoin is accessible to anyone, it is an example of an open, or a permissionless blockchain.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m6 l8">
                        <div className="card horizontal z-depth-4 hoverable" data-aos="fade-down-left">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img src="https://miro.medium.com/max/771/1*1gKvru2WUl0G1mBwyogzkw.png" />
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">An Overview of Smart Contracts<i className="material-icons right">more_vert</i></span>
                                <p><a href="https://medium.com/@nikhilchouhan987/an-overview-of-smart-contracts-90b0c6367cb6" target="_blank">View the Full Blog</a></p>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">An Overview of Smart Contracts<i className="material-icons right">close</i></span>
                                <p>https://medium.com/@nikhilchouhan987/an-overview-of-smart-contracts-90b0c6367cb6</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 m6 l12">
                        <div className="card horizontal z-depth-5 hoverable" data-aos="zoom-in">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img src="https://miro.medium.com/max/773/1*joZsCLh8Uo04Nl4wpA-Q6g.jpeg" />
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Brain Computing Interface the next big thing?<i className="material-icons right">more_vert</i></span>
                                <p><a href="https://medium.com/@parthakmehta/brain-computing-interface-the-next-big-thing-a3d53e90a96c" target="_blank">View the Full Blog</a></p>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Brain Computing Interface the next big thing?<i className="material-icons right">close</i></span>
                                <p> Brain Computing Interfaces have advanced extensively in the recent times. From being only a medical device, it has been introduced to many other fields such as home automation, gamming, entertainment, education, biometrics, meditation, and many more. There are various stages for implementing this, extracting signals from brain using various processes such as EGG, ECoG, etc. Then data pre-processing and signal processing is done by various methods including supervised machine learning, filters and others. Then all this data is analyzed and used in various applications.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs