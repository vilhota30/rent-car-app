import React, { useEffect, useState } from 'react';
import { Container, Label } from './RangeInput.styled';

function RangeInput({ minName, maxName, onChange, label = 'Set range' }) {
    const [range, setRange] = useState({
        [minName]: null,
        [maxName]: null
    });

    const handleChange = (e) => {
        setRange({
            ...range,
            [e.target.getAttribute('name')]: parseInt(e.target.value)
        });
    };

    useEffect(() => {
        onChange({ [minName]: range[minName], [maxName]: range[maxName] })
    }, [range, onChange, maxName, minName])

    return (
        <Container>
            <Label>{label}</Label>
            <div>
                <input style={{borderRadius: "4px"}}
                    placeholder='From'
                    type="number"
                    name={minName}
                    onChange={(e) => handleChange(e)}
                />
                <input style={{borderRadius: "4px"}}
                    placeholder='To'
                    type="number"
                    name={maxName}
                    onChange={(e) => handleChange(e)}
                />
            </div>
        </Container>
    );
}

export default RangeInput;
