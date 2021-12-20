import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Typography, Box, colors } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';


function TabPostagem() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
        setValue(newValue);
    }
    return (
        <>
            <TabContext value={value}>
                <AppBar className='cor-barra' position="static" >
                    <Tabs  centered indicatorColor="secondary" onChange={handleChange} className='text-color'>
                        <Tab label="Todas as postagens" value="1" className='text-color'/>
                        <Tab label="Sobre-nós" value="2" className='text-color' />
                    </Tabs>
                </AppBar>
                <TabPanel value="1"  >
                    <Box display="flex" flexWrap="wrap" justifyContent="center" alignItems="center">
                        <ListaPostagem />
                    </Box>
                </TabPanel>
                <TabPanel value="2" >
                    <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Sobre-nós</Typography>
                    <Typography variant="body1" gutterBottom color="textPrimary" align="center">Desenvolvida por Vinicius Eidi Sato, essa plataforma teve como objetivo inicial servir como base de estudo para a conclusão do Bootcamp ministrado pela Generation Brasil. Entretando, surgiu a oportunidade de cultivar uma comunidade para Desenvolvedores Web ou não ded todo o Brasil. Faça parte você também e nos ajude a crescer.</Typography>
                </TabPanel>
            </TabContext>
        </>
    );
}
export default TabPostagem;