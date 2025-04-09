import style from './Maps.module.css'

const Maps = () => {
    return (
        <div className={style.containerMaps}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.3957678306374!2d-51.2565782897957!3d-30.111486734282238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95198395fd1fcc3b%3A0x5baf960caa4dba3a!2sDepill%C3%A8r%20Petit%20-%20Zona%20Sul!5e0!3m2!1spt-BR!2sbr!4v1743742623646!5m2!1spt-BR!2sbr" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}

export default Maps