import "./Landing.css"

export default function Landing(){
    return(
        <main className="main-container">
            <section className="hombre">
                <img className="man" src="https://i.ibb.co/dbWZTgD/hombre-se-alando1-removebg-preview.png" alt="hombre" />
            </section>
            <section className="main-pictures">
                <h2>Galeria de Imágenes</h2>
                <section className="pictures">
                    <img src="https://staticw.s3.amazonaws.com/inmuebles/gr226751020210222043001.jpeg" alt="casa" />
                    <img src="https://img.resemmedia.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzFkNDA5NmRlLWY5MzYtNGJiYS05Zjg0LTA4ZGRlMGM3MmEzZS9hODRiYzBiYS1mNzg5LTQ4YTQtYjQyZS1jNGJmZWE3NjI1NWEuanBnIiwiYnJhbmQiOiJSRVNFTSIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzU0LCJoZWlnaHQiOjI0MCwiZml0IjoiY292ZXIifX19"/>
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