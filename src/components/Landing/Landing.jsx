import "./Landing.css"

export default function Landing(){
    return(
        <main className="main-container">
            <section className="hombre">
                <img className="man" src="https://i.ibb.co/0qdCkmq/Whats-App-Image-2023-07-29-at-3-54-25-PM-removebg-preview.png" alt="Antonio Martinez" />
            </section>
            <section className="main-pictures">
                <h2>Galeria de Imágenes</h2>
                <section className="pictures">
                    <img src="https://staticw.s3.amazonaws.com/inmuebles/gr226751020210222043001.jpeg" alt="casa" />
                </section>
            </section>
            <section className="video-container">
                <h2>Galería de Videos</h2>
                <iframe width="701" height="403" src="https://www.youtube.com/embed/v2Ebw21qfNM" title="Video Venta Casa Soacha" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <iframe width="716" height="403" src="https://www.youtube.com/embed/x2kJ6VKtnhs" title="Casa en la Mesa" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </section>
                
        </main>
    )
}