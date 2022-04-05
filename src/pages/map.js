import React from 'react'

const AddressMap=()=>{
    return (
        <div className="google-map-code" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.02594877576!2d85.30178491487146!3d27.716485082788157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1981c174f85d%3A0x598bab7680f14a0a!2sContent%20Factory!5e0!3m2!1sen!2snp!4v1645866067534!5m2!1sen!2snp" width="800" height="600" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>>
        </div>
    );
 }

export default function map() {
    return (
        <AddressMap/>
    )
}

