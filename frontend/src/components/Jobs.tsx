
import { CardContent, Grid } from '@material-ui/core';
import { CardActionArea, Box, Card } from '@mui/material';
import { Job } from './interfaces';
import { useEffect, useState } from 'react';

const JobsComponent = ({jobs, searchInput}: {jobs: Job[], searchInput: string}): JSX.Element => {

    const [currentJob, setCurrentJob] = useState<Job>();  
      
    useEffect(() => {
        setCurrentJob(jobs[0]);
    }, []);

    const openJobDescription = (e: React.MouseEvent<HTMLDivElement>, job: Job) => {
        console.log("Event: ", e.currentTarget);
        console.log("Job: ", job);
    }

    const filtered_jobs = jobs.filter((job) => {
        return job.company.toLowerCase().includes(searchInput.toLowerCase());
    });
    
    const jobsElement = filtered_jobs.map((job: Job, index: number) => {
        return (
            <Grid item xs={12} key={index}>
            <Card onClick={(event) => openJobDescription(event, job)}>
                <CardActionArea>
                <CardContent>
                    <h3>{job.company}</h3>
                    <h3>Salary: {job.minSalary}€-{job.maxSalary}€</h3>
                    <h3>{job.isRemote ? "Remote": "Presencial"}</h3>
                </CardContent>
                </CardActionArea>
            </Card>
            </Grid>
        );
    });

    return (
        <div style={{display: "flex", flexDirection: "row"}}>
            <Grid container  spacing={0}>
                {jobsElement}
            </Grid>
            {currentJob ? 
            <Card sx={{ width: 800 }}>
                <CardContent>
                    <h3>Software Developer (C++)</h3>
                </CardContent>              
                <CardContent>
                    <p>Company: {currentJob?.company}<br/>

                    About Us:
                    Join one of the world's leading technology companies and be part of the innovative team that shapes the future of software development. At Google, we are committed to creating groundbreaking products that impact millions of users worldwide. As a Software Developer, you'll work with some of the brightest minds in the industry, tackling complex challenges and pushing the boundaries of what's possible.

                    Responsibilities:

                        Design, develop, and maintain high-performance and scalable software solutions using C++.
                        Collaborate with cross-functional teams to define requirements and implement cutting-edge features for our flagship products.
                        Optimize existing code and algorithms for maximum efficiency and performance.
                        Conduct thorough code reviews and provide constructive feedback to ensure code quality and maintainability.
                        Troubleshoot and resolve complex software issues to ensure smooth product operation.
                        Stay updated with the latest developments in C++ and software engineering best practices to drive continuous improvement.

                    Qualifications:

                        Bachelor's or Master's degree in Computer Science or a related field.
                        Solid proficiency in C++ programming and in-depth knowledge of object-oriented design principles.
                        Experience with large-scale software development and debugging in a Unix/Linux environment.
                        Strong problem-solving skills and the ability to analyze and optimize complex algorithms.
                        Familiarity with software development tools, version control systems, and build automation.
                        Excellent communication and teamwork skills to collaborate effectively in a dynamic environment.
                        Passion for learning and staying up-to-date with emerging technologies and industry trends.

                    Preferred Qualifications:

                        Experience with open-source projects or contributions to the C++ community.
                        Familiarity with distributed systems, multi-threading, and concurrency concepts.
                        Knowledge of performance profiling and optimization techniques.
                        Understanding of network protocols and systems programming.
                        Familiarity with machine learning or data analysis is a plus.

                    Perks:
                    At Google, we believe in taking care of our employees and providing a supportive work environment. Here are some of the perks we offer:

                        Competitive salary and bonuses
                        Comprehensive health and wellness benefits
                        Stock options and retirement plans
                        Flexible work hours and remote work options
                        On-site fitness center and recreational facilities
                        Free gourmet meals and snacks
                        Professional development opportunities and tuition reimbursement
                        Collaborative and inclusive company culture

                    Join us and shape the future of software development at Google! Apply now and let's build extraordinary products together.</p>
                </CardContent>
            </Card>
            : null}
            
        </div>
        );

} 

export default JobsComponent;