import React from "react";
import Event from './Event';

const Calendar = () => {
    return (
        <div className="Calendar">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td className="time">12pm</td>
                        <Event event='Church' color='green' />
                        <td></td>
                        <Event event='Family lunch day' color='blue'/>
                        <Event event='Fat breakfast' color='blue'/>
                        <td></td>
                        <td></td>
                        <Event event='Italian lunch with GF' color='blue'/>
                    </tr>
                    <tr>
                    <td className="time">1pm</td>
                        <td></td>
                        <Event event='Homies Soccer' color='red'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Mustang Racing' color='red'/>
                        <td></td>
                    </tr>
                    <tr>
                    <td className="time">2pm</td>
                        <Event event='Homies Soccer' color='red'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Chill Drive' color='red'/>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                    <td className="time">3pm</td>
                        <Event event='Afternoon BBQ' color='blue' />
                        <td></td>
                        <Event event='Study for something' color='brown'/>
                        <Event event='See Girlfriend' color='red'/>
                        <td></td>
                        <td></td>
                        <Event event='Beach with girlfriend' color='red'/>
                    </tr>
                    <tr>
                    <td className="time">4pm</td>
                        <td></td>
                        <Event event='Pool Party' color='red'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Visit favorite cousin' color='blue'/>
                        <td></td>
                    </tr>
                    <tr>
                    <td className="time">5pm</td>
                        <td></td>
                        <Event event='Afternoon feast' color='blue'/>
                        <td></td>
                        <td></td>
                        <Event event='Study for something' color='brown'/>
                        <td></td>
                        <Event event='Youth get together' color='red'/>
                    </tr>
                    <tr>
                    <td className="time">6pm</td>
                        <td></td>
                        <td></td>
                        <Event event='Family Dinner' color='blue'/>
                        <td></td>
                        <Event event='Keep on studying' color='brown'/>
                        <Event event='Mall with girlfriend' color='blue'/>
                        <td></td>
                    </tr>
                    <tr>
                    <td className="time">7pm</td>
                        <Event event='Homies Soccer' color='red'/>
                        <td></td>
                        <td></td>
                        <Event event='Movies with the homies' color='red'/>
                        <td></td>
                        <td></td>
                        <Event event='Homies Soccer' color='red'/>
                    </tr>
                    <tr>
                    <td className="time">8pm</td>
                        <Event event='Coxinha time' color='blue'/>
                        <Event event='Bible Study' color='green'/>
                        <td></td>
                        <Event event='Church band rehearsal' color='green'/>
                        <td></td>
                        <Event event='Youth Group' color='green'/>
                        <td></td>
                    </tr>
                    <tr>
                    <td className="time">9pm</td>
                        <Event event='Mario Kart Wii' color='red'/>
                        <td></td>
                        <Event event='Family Movie' color='red'/>
                        <td></td>
                        <Event event='Weekday Church Sevice' color='green'/>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Calendar;