import React, { useState } from 'react'
import "./MailerForm.css"

function MailerForm(props) {

    const [email, setEmail] = useState({destiny: '', subject: '', text: ""})
    const onChange = e => {
        setEmail({...email, [e.target.name]: e.target.value})
    }

    const createEmail = e => {
        e.preventDefault();
        const newEmail = { destiny: email.destiny, subject: email.subject, text: email.text }
        props.onCreateEmail(newEmail)
        // setStudents([...students, student])
        setEmail({ destiny: '', subject: '', text: "" });
    }
    
    return (
        <div className="mailerForm container">
            <form onSubmit={createEmail} style={{padding:"20px"}}>
                <div className="form-group">
                    <label htmlFor="destiny">Destiny</label>
                    <input type="text" value={email.destiny} onChange={onChange}
                            className="form-control" name="destiny" id="destiny" placeholder="Input destiny..."/>
                </div>
                <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input type="text" value={email.subject} onChange={onChange}
                            className="form-control" name="subject" id="subject" placeholder="Input subject..."/>
                </div>
                <div className="form-group">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={email.text} onChange={onChange}
                            className="form-control" name="text" id="text" placeholder="Input text..."/>
                </div>
                <button type="submit" className="btn btn-primary">Create email</button>
            </form>
        </div>
    )
}

export default MailerForm
