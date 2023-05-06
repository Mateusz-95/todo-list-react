import "./style.css"

const Section = ({ title, body, extraHeaderContent }) => (
    <section className="section">
        <div className="section__header section__header--buttons">
            <h2>{title}</h2>
            {extraHeaderContent}
        </div>
        <div className="section__body">
            {body}
        </div>
    </section>
);

export default Section;