import classes from './ContactForm.module.css';
import './ContactForm.module.css';
import { useState } from "react"

const ContactForm = ({ onCreate }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [fono, setFono] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onCreate({ name, email, fono });
    }

    return (
        <form onSubmit={handleSubmit} className={classes.formContainer}>
            <div className={classes.formGroup}> 
            <label className={classes.label}>Nombre:</label><input className={classes.input} value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className={classes.formGroup}> 
            <label className={classes.label}>Email:</label><input className={classes.input} value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className={classes.formGroup}> 
            <label className={classes.label}>Telefono:</label><input className={classes.input} value={fono} onChange={(e) => setFono(e.target.value)} />
            </div>
            <hr className={classes.divider} />
            <button className={classes.orderButton}>Generar Orden</button>
        </form>
    )
}

export default ContactForm;