import React from 'react'
import { schedules } from '../Constants/Constants';

export default function Schedule() {
    return (
        <section id="schedule">
            <div className="extra-container">
                <div className="schedule-list__tittle">
                    <h1>Conference Schedule</h1>
                </div>
            </div>
            <div className="schedule-list">
                <div className="container">
                    <div className="row">
                        {schedules.map((schedule) => {
                            return(
                                <div id = { schedule.id } className = "col-lg-12" key={schedule.id} >
                                <h2 className={schedule.class}>{schedule.day}</h2>
                                <div className={schedule.listClass}>
                                    <h3>{schedule.date}</h3>
                                    <ul className="min-list">
                                            <li><span><strong>Session</strong></span><span><strong>Timing</strong></span></li>
                                            {schedule.items.map((item) => {
                                                return (
                                                    <li><span>{item.title}</span><span>{item.time}</span></li>
                                                );
                                            })}
                                    </ul>
                                </div>
                            </div>
                    );
                        })}
                    </div>
                </div>
            </div>


        </section>
    )
}
