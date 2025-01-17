import React from 'react';
import './index.css';
import { useState, useEffect } from 'react';

function App() {

    const url = "https://function.nevarez.cloud/api/views"

    const [count, setCount] = useState(null);

    const english_ordinal_rules = new Intl.PluralRules("en", {type: "ordinal"});
    const suffixes = {
        one: "st",
        two: "nd",
        few: "rd",
        other: "th"
    };
    
    function ordinal(number) {
        const category = english_ordinal_rules.select(number);
        const suffix = suffixes[category];
        return (number + suffix);
    }
    
    useEffect(() => {
      view_count()
    },[])

    async function view_count() {

        const res = await fetch(url, {
            method: "POST",
            headers: {
            "Content-type": "*/*; charset=UTF-8",
            "Access-Control-Allow-Origin": "https://function.nevarez.cloud"
            }
        });

        setCount(ordinal(await res.text()));
    }
    
  return (
    <>
    <body>
        <div class="center">
            {count && <h4>You are the {count} visitor!</h4>}
            <h1 class="center">Ricardo Nevarez Jr</h1>
            <div>
                <p><a href="ricardo@nevarez.cloud">ricardo@nevarez.cloud</a> | (937) 527-7022 | <a href="https://www.linkedin.com/in/rnevarezjr/">https://www.linkedin.com/in/rnevarezjr/</a> | <a href="https://github.com/rnevarez-cloud">https://github.com/rnevarez-cloud</a></p>
            </div>
        </div>
        <div>
            <h3>EXPERIENCE</h3>
            <hr />
            <div>
                <p class="left-right-align"><b>Jenzabar<span>Boston, MA</span></b></p>
                <p class="left-right-align">Systems Administrator III - Team Lead <span>January 2023 - November 2024</span></p>
                <ul>
                    <li>Led an implementation project for Jira Service Management at an enterprise level to streamline the customer and support analyst experience</li>
                    <li>Created comprehensive technical documentation to enforce consistent procedures and practices across the team, enabling effective knowledge transfer and reducing errors by 20%</li>
                    <li>Developed PowerShell scripts and Ansible automations to reduce application deployments and implementations from 8 hours to 4 hours</li>
                    <li>Improved corporate processes by utilizing Jira Service Management’s REST API, native automation plugin, and Apache Groovy</li>
                    <li>Supervised the day-to-day activities involved in managing connections with RoyalTS</li>
                    <li><b>Skills:</b> Virtualization · System Deployment · Documentation · Windows System Administration · Leadership · Training · System Administration · Public Speaking · PowerShell · Jira Service Management · Confluence · Jira Reporting & Filters · Opsgenie · Rest API · Apache Groovy</li>
                </ul>
            </div>
            <div>
                <p class="left-right-align">Systems Administrator II<span>April 2021 - January 2024</span></p>
                <ul>
                    <li>Installed, configured, tested, and deployed core products for Jenzabar, ensuring smooth and efficient operation of critical systems</li>
                    <li>Conducted regular server checks to identify and resolve potential issues, minimizing downtime and ensuring optimal performance</li>
                    <li>Lead for the implementation of an enterprise-wide rollout of Jira Service Management</li>
                    <li>Developed integration between Jira Service Management and Supportbench utilizing REST APIs and Apache Groovy</li>
                    <li><b>Skills:</b> Virtualization · Ansible · System Deployment · Documentation · Windows System Administration · Windows Server · SQL · Active Directory · Server Administration · Troubleshooting · Networking · Software Installation · PowerShell · Microsoft SQL Server · Logging · Monitoring · Alerting</li>
                </ul>
            </div>
            <div>
                <p class="left-right-align">Systems Administrator I<span>June 2019 - April 2021</span></p>
                <ul>
                    <li>Provided comprehensive Monthly Remote Management reports to customers, delivering key insights and updates on system performance and activity</li>
                    <li>Assisted customers in resolving system issues, offering technical expertise and escalating problems when necessary to ensure timely and effective resolution</li>
                </ul>
            </div>
        </div>
        <div>
            <h3>EDUCATION</h3>
            <hr />
            <p class="left-right-align"><b>Bellevue University<span>Bellevue, NE</span></b></p>
            <p class="left-right-align">B.S. in Information Technology <span>August 2020 - 2025</span></p>
            <p class="left-right-align"><b>Southern State Community College<span>Hillsboro, OH</span></b></p>
            <p class="left-right-align">A.S. in Computer Information Technology <span>August 2018 – May 2019</span></p>        
        </div>
        <div>
            <h3>SKILLS</h3>
            <hr />
            <p><b>Operating Systems</b> - Windows, Linux</p>
            <p><b>Jira</b> - Automations, workflows, dashboards, filters, ScriptRunner, Tempo Timesheets</p>
            <p><b>Programming/Scripting</b> - Apache Groovy, HTML, PowerShell, Python</p>
            <p><b>Software</b> - Jira Service Management, Confluence, Opsgenie, VMware, LogicMontior, Internet Information Services (IIS), Apache, JBoss/Payara, Ansible, REST APIs, Microsoft SQL Server, RoyalTS</p>
            <p><b>Network</b> - Active Directory, DNS, DHCP, TCP/IP</p>
        </div>
    </body>
  </>
  ) 
}

export default App;