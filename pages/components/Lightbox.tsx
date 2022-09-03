import styles from '../../styles/Lightbox.module.css'
import Image from 'next/image'

const Lightbox = ({images}: any) => {
    function openModal(){
        document.getElementById("modal")!.style.display = "block";
    }

    function closeModal(): void{
        document.getElementById("modal")!.style.display = "none";
    }

    // function plusSlides(num: number): void{
    //     console.log('ooi')
    // }

    let slideIndex = 1;
    function currentSlide(n: number): void{
        showSlide(slideIndex = n);
    }

    function showSlide(n: number): void{
        const slides = Array.from(document.getElementsByClassName("slides")  as HTMLCollectionOf<HTMLElement>);
        if( n > slides.length ){ slideIndex = 1 } 
        if( n < 1 ) { slideIndex = slides.length }
        slides.forEach((slide: any) => slide.style.display = "none");
        
        slides[slideIndex-1].style.display = "block";
    }

    return(
        <div>
            <div className={styles.row}>
                {images.map((image: any, index: number) => (
                    <div key={index} className={styles.foto}>
                        <Image src={`https:${image.fields.file.url}`} alt="galeria" height={280} width={480} layout="fixed" onClick={() => {openModal();currentSlide(index)}} />
                    </div>
                ))}
            </div>
            <div id="modal" className={styles.modal} onClick={() => closeModal()}>
                {/* <span className={"close cursor"} onClick={() => closeModal()}>&times;</span> */}
                <div className={styles.modalContent}>
                    {images.map((image: any, index: number) => (
                        <div className="slides" key={index}>
                            <Image src={`https:${image.fields.file.url}`} alt="" width={1000} height={600}  />
                        </div>
                    ))}
{/* 
                    <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>    
                    <a className="next" onClick={() => plusSlides(-1)}>&#10095;</a>     */}
                </div>
            </div>
        </div>
    )
}

export default Lightbox