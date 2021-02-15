import React, {useState, useEffect} from 'react'
import { Button, Col, Row, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from './MyModal'
import Gif from './Gif'

const GifsList = ({data, callback}) => {
    const [selected, setSelected] = useState({})
    const [open, setOpen] = useState(false)

    const handleClick=(item)=>{
        setSelected(item)
        setOpen(true)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    
    const gifsList = data.map((item) =>
        <div className="gif-wrapper" key={item.id}>
            <Gif url={item.images.fixed_height_small.url} key={item.id} alt={item.slug} height={item.images.fixed_height_small.height} width={125} />
            <Button variant="light" onClick={()=>handleClick(item)}>show</Button>
        </div>
    )

    function handleScroll() {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
        callback(true)
    }


    return (
        <>
        {!!open && <Modal item={selected} open={open} callback={setOpen}/>}
        {data.length > 0 && <div className="m-auto center">Scroll down to load more GIFs</div>}
            <div className="gifs-list" id="gifsList">{gifsList}</div> 
        </>
    )
}

export default GifsList
