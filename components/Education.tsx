import ExtLink from './ExtLink'
import data from './data/personalInfo.json'

const Education = (): JSX.Element => {
    return (
        <section className="grid" id="education">
            <h2 className="text-xl font-bold mt-12 mb-4">Education</h2>
            <p className = "text-base ml-4 text-gray-700">
                Biomedical Engineering, Bachelors of Applied Science (BASc), University of Waterloo    &nbsp; &nbsp; &nbsp; &nbsp;   &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;             2022-2027
               
            </p>
        </section>
    );
};



export default Education;
