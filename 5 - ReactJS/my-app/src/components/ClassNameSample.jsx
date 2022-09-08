import './styles/ClassNameSample.css';

const someContent = "Some Content";
const element = (
    <div className="red border">
        {someContent}
    </div>
);

const element2 = (
    <div className="red border">
        {someContent + ' Part 2'}
    </div>
);

const ClassNameSample = () => {
 return (
    <>
    {element}
    {element2}
    </>
 )
};

export default ClassNameSample;