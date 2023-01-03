import React from 'react'
import "../styles/text.css"

function text() {
    return (
        <div className='details'>
            <div className='text'>
                <h2>Hotel Vshal @ Airport</h2>
                <br></br>104/2/2, Natinal Highway 8, Mahimpur <a href="https://www.google.com/maps">view map</a>
                <br></br>Delhi, New Delhi,India
                <p><h5>91+ 8586478596, 7458965874</h5></p>
                <p>&#x2022; Free Parking
                    &#x2022; Conference Room
                    &#x2022; Atm
                    &#x2022; conference Room
                    &#x2022; Converstaion Room
                </p>
                <p>Eka is a contemporary 4-star hotel in Nairobi, conveniently located at the intersection of Mombasa Road and Southern By-pass, 5 minutes from JKIA through the express highway with close proximity to the Nairobi national park, major government and corporate organizations.
                    Eka Hotel Nairobi features 167 well-appointed rooms, five meeting & conference rooms, restaurant & bar, gym, swimming pool, gift shop, wellness center among other top facilities offering the best choice venue for your business and leisure stay.</p>
                <hr></hr>
                <div className='footer'>
                    <h3>Property Rules</h3>
                    <div className='point'>
                        <div className='col1'>
                        &#x2022; Guests with Fever are not Allowed<br></br>
                        &#x2022; Guests below 18 years are not allowed<br></br>
                        &#x2022; Non govt ids are not accepted<br></br>
                        &#x2022; other rules<br></br>
                        &#x2022; other rules<br></br>
                        </div>
                        <div className='col2'>
                        &#x2022; other rules<br></br>
                        &#x2022; other rules<br></br>
                        &#x2022; other rules<br></br>
                        &#x2022; other rules<br></br>
                        &#x2022; other rules<br></br>
                        </div>
                    </div>
                </div>
            </div>
            <div className='map'>
                <iframe class="gmap_iframe" className='map' src="https://maps.google.com/maps?width=452&amp;height=400&amp;hl=en&amp;q=IIITM&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            </div>

        </div>
    )
}

export default text