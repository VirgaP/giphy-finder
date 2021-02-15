import React, {useState} from 'react'
import {Container, Row, Col, Button, Form} from 'react-bootstrap'
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';


const Search = ({onSearch, setKeyword}) => {
    const [error, setError] = useState("")

    const validate =(input)=>{
        var regex = /^[0-9a-zA-Z]+$/;
        if(input.match(regex)) {
            setError('')
         return true;
        } else { 
            setError('Only letters and numbers are allowed')
         return false; 
        }
    }

    const handleInput =(e)=>{
        const {value} = e.target
        const valid = validate(value)
        setKeyword(value)
        if(valid && value.lenght > 1){
            setKeyword(value)
            onSearch();

            if (e.keyCode === 13) {
                e.preventDefault();
                onSearch(value);
            } 
        }
    }

    const onSubmit =(e)=>{
        e.preventDefault();
        onSearch();
    }
    return (
        <div className="center">
            <form onSubmit={onSubmit} className="m-auto">
                <input
                    id="keyword"
                    type="text"
                    name="keyword"
                    placeholder="enter search keyword"
                    onChange={handleInput}
                />
                <Button className="button" size={'sm'} type={'submit'}>
                search
                </Button>
            </form>
        {error&&<span className="error">{error}</span>}
        </div>
    )
}

Search.propTypes = {
    onSearch: PropTypes.func,
    onSearch: PropTypes.func,
}

export default Search
