import React from 'react';

import { readFileProblem1 } from './helpers/readFileProblem1';
import { readFileProblem2 } from './helpers/readFileProblem2';

import './assets/css/main.css';

export const HuntItTest = () => {

    const handleFileProblem1 = ({ target }) => {

        const file = ( target.files[0] );
        if( file ){
            
            readFileProblem1( file );
        }
        return;
    }

    const handleFileProblem2 = ({ target }) => {

        const file = ( target.files[0] );
        if( file ){
            
            readFileProblem2( file );
        }
        return;
    }
    
    return (
        <div className = "main d-flex justify-content-center " >
            
            <div className = "main__div-problem row d-flex justify-content-center">
                <h1>Problem 1 attachment</h1>
                <input
                    className = "input-problem1"
                    type = "file"
                    multiple = { false }
                    onChange = { handleFileProblem1 }
                    accept = ".txt"
                />
            </div>
            <div className = "main__div-problem row d-flex justify-content-center">
            <h1>Problem 2 attachment</h1>
                <input
                    className = "input-problem2"
                    type = "file"
                    multiple = { false }
                    onChange = { handleFileProblem2 }
                    accept = ".txt"
                />
            </div>
            
        </div>
    )
}
