const Nav = () => (
    <nav>
        <div className='nav__items'>
            <a className='nav__item--left' href='/'><img src={logo} alt='smile logo' className='nav__item--logo'/></a>
            {/* <a className='nav__item--left' href='/'><p className='nav__item--logo'>:]</p></a> */}
            <Link className={window.location.href.indexOf('contact') > 0 ? 'nav__item--link active' : 'nav__item--link'}
            to='#contact'>Contact</Link>
            <Link className={window.location.href.indexOf('portfolio') > 0 || window.location.href.indexOf('category') > 0 ? 'nav__item--link active' : 'nav__item--link'}
            to='#projects'>Portfolio</Link>
        </div>
    </nav>
)



.nav__items {
    background-color: transparent;
    border: none;
    height: 40px;
    margin-top: 40vh;
    /* margin-left: auto; */
    /* display: flex; */
    justify-content: flex-end;
    /* align-items: center; */
    position: fixed;
} 

// PROJECTS
render={data => (
    <section id="projects">
    <h1 className='header__title'>Projects</h1>
       <div className='feed'>
           {data.allContentfulProject.edges.map(edge => (
         <div className="card--overlay">
               <div key={edge.node.id} className='card'
               style={{
                   backgroundImage: `
                   url(${edge.node.featuredImage.fluid.src})`
               }}
           onClick={() => navigate(`/project/${edge.node.slug}`)} >
         </div>
           <h2 className='card__title'>{edge.node.title}</h2>
           <p className='card__keywords'>{edge.node.seoKeywords}</p>

           {/* {edge.node.categories.map(category => (
               <p className='card__category'>{category.title}</p>
           ))} */}
         </div>
           ))}
       </div>
   </section>
)}
/>
)

.card__category {
    font-family: Muli,sans-serif;
    font-size: 14px;
    line-height: 18px;
    font-weight: 700;
    color: #fff;
    margin: 0;
}

.project__title {
    margin: 0;
    font-size: var(--font-title--medium);
    font-family: var(--primary-text); 
    text-transform: uppercase;
    color: var(--primary-color);
    transition: all 0.3s ease-in-out;
}

.project__keywords {
    margin: 0;
    font-size: 1.5em;
    font-family: var(--secondary-text); 
    text-transform: lowercase;
    color: var(--primary-color);
}

.card {
    /* background-size: cover; */
    background-repeat: no-repeat;
    background-position: center;
    /* border-radius: 5px; */
    /* display: flex; */
    /* flex-direction: column; */
    /* justify-content: flex-end; */
    padding: 1em;
    transition: all .3s ease;
    mix-blend-mode: overlay;

    width: auto;
    /* min-height: 400px; */
    height: 60vh;
}

.card:hover {
    cursor: pointer;
    /* transform: scale(1.02); */
    mix-blend-mode: normal;
}

.card--overlay {
    
    height: auto;
    width: auto;
    background-color: var(--rotation-color-primary);
}


// animate page transitions
// https://www.freecodecamp.org/news/how-to-animate-page-transitions-in-gatsby-js-b36e3ae14c29/

// animations in scroll (anmate bg colors as scroll down page)
// https://css-tricks.com/aos-css-driven-scroll-animation-library/