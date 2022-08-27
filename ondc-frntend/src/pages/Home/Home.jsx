import React, { useEffect, useState } from "react";
import './Home.css'
import sanityClient from "../../client";

function Home() {

  // const temp = *[_type == 'profession']{
  //   title,
  //   jobname
  // }

  const [allJobs, setAllJobs] = useState([]);

  useEffect(() => fetchData, []);

  const fetchData = async() => {
    await sanityClient
    .fetch(
      `*[_type == "profession"]`
    )
    .then((data) => setAllJobs(data))
    .catch(console.error);
  }

  console.log(allJobs);

  return (
    <div className="home-container">
      <div className='card-container'>
        {allJobs.map((job) => 
            <div className="work-card">
              <h1>{job}</h1>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Home