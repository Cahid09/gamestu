import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function CustomAccordion() {
    const items = [
        {
            title: "PC",
            text: "Curabitur vel ex efficitur, posuere risus et, consequat metus. Phasellus facilisis quis ligula nec feugiat. Ut fringilla, risus sed tristique maximus, orci augue tristique nunc, sit amet ultrices nibh elit ut magna. Curabitur ornare lacus in augue placerat dapibus sit amet vel dolor."
        },
        {
            title: "Console",
            text: "Curabitur vel ex efficitur, posuere risus et, consequat metus. Phasellus facilisis quis ligula nec feugiat. Ut fringilla, risus sed tristique maximus, orci augue tristique nunc, sit amet ultrices nibh elit ut magna. Curabitur ornare lacus in augue placerat dapibus sit amet vel dolor."
        },
        {
            title: "Mobile",
            text: "Curabitur vel ex efficitur, posuere risus et, consequat metus. Phasellus facilisis quis ligula nec feugiat. Ut fringilla, risus sed tristique maximus, orci augue tristique nunc, sit amet ultrices nibh elit ut magna. Curabitur ornare lacus in augue placerat dapibus sit amet vel dolor."
        },
        {
            title: "AR/VR",
            text: "Curabitur vel ex efficitur, posuere risus et, consequat metus. Phasellus facilisis quis ligula nec feugiat. Ut fringilla, risus sed tristique maximus, orci augue tristique nunc, sit amet ultrices nibh elit ut magna. Curabitur ornare lacus in augue placerat dapibus sit amet vel dolor."
        }
    ];

    const [expandedPanels, setExpandedPanels] = useState({});

    const handleChange = (panel) => (event, isExpanded) => {
        setExpandedPanels(prevState => ({
            ...prevState,
            [panel]: isExpanded
        }));
    };

    return (
        <div className="accordion-home">
            <div className="top-section">
                <h6>Popular Platforms</h6>
                <p>We develop games for the most phasellus ut interdum nunc, vel pretium ligula nam tincidunt enim ut ligula vehicula non.</p>
            </div>
            <div className="accordion">
                {items.map((item, index) => {
                    const panelId = `panel${index}`;
                    return (
                        <Accordion 
                            key={panelId} 
                            expanded={!!expandedPanels[panelId]} 
                            onChange={handleChange(panelId)} 
                            className='accordion-box'
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon className='text-[#9DA2AA]' />}
                                aria-controls={`${panelId}-content`}
                                id={`${panelId}-header`}
                            >
                                <h1 style={{ color: expandedPanels[panelId] ? '#FD307A' : 'white' }}>{item.title}</h1>
                            </AccordionSummary>
                            <AccordionDetails>
                                <p>{item.text}</p>
                            </AccordionDetails>
                        </Accordion>
                    );
                })}
            </div>
        </div>
    );
}

export default CustomAccordion;
