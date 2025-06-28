import React from 'react'
const CONTACT =  {
        adress: "Faisalabad",
        phoneno: "+92 313 3388043",
        email: "sobiabibighafoor@gmail.com"
    }

const Contact = () => {
  return (
    <div className='border-t border-stone-900 pb-20'>
      <h2 className='my-10 text-center text-4xl'>Get in Touch</h2>
      <div className='text-center tracking-tighter'>
        <p className='my-4 text-[white]'>{CONTACT.adress}</p>
        {/* <p className='my-4'>{CONTACT.phoneno}</p> */}
        <a href="#">{CONTACT.email}</a>
      </div>
    </div>
  )
}

export default Contact
