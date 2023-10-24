import Image from 'next/image';
import classes from './hero.module.css'

function Hero(){
    return (
    <section className={classes.hero}>
        <div className={classes.image}>
            <Image src="/images/site/walid.png" alt='image of walid' width={300} height={300} />
        </div>
        <h1>Hi, i am walid</h1>
        <p>
            i blog about web development - especially react and laravel
        </p>
    </section>
    );
}

export default Hero;