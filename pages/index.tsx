import {NextPage} from 'next';

import About from '../components/About';
import Education from '../components/Education';



const Index: NextPage<unknown> = () => (
    <>
        <About/>
        <Education/>
    </>
);

export default Index;
