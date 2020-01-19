import { useState, useEffect } from "react";
import SimpleIcons from 'simple-icons-react-component';
import TextLoop from "react-text-loop";


const TextLooper = () => {
    const namesOfSkills = [ "Python", "deadlines", "three.js", "passion", "teams", "friends", "open-source", "Raspberry Pi", "Arduino", "Next.js", "React", "Redux", "GraphQL", "Node.js", "JavaScript", "PostgreSQL", "Apache", "Docker", "Debian", "Linux", "Adobe Illustrator", "GIMP", "Sass", "Ripple", "Mapbox" ] 
    const characters = "日アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンあいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん";
    const [ skillsWithCharacters, setSkillsWithCharacters ] = useState();
    

    useEffect(() => {
        if (!skillsWithCharacters) {
            const finalArray = getArrSkillsWithCharacters(namesOfSkills, characters);
            setSkillsWithCharacters(finalArray);
        }
    }, [])
    
    const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // const getNumberOfRandomCharacters = (number, chars) => {
    //     if (!number) number = 9;
    //     return chars.substr(getRandomInt(0, chars.length - number), number + 1)
    // }

    const getArrSkillsWithCharacters = (skills, chars) => {
        let skillCharArr = [];
        for (let i=0; i<=88; i++) {
            let selectSkill = skills[getRandomInt(0, namesOfSkills.length - 1)];
            // let createChars = getNumberOfRandomCharacters(selectSkill.length - 1, chars)
            skillCharArr.push(selectSkill);
        };
        return skillCharArr;
    }

    return (
        <main className="main__textlooper header-major">
            <div className="block__title">I love building with&nbsp;</div>
            
            {skillsWithCharacters ? (
                <TextLoop 
                    interval={[2000, 3000]}
                    delay={0}
                    mask={false} 
                    fade={true}
                    noWrap={false}
                    springConfig={{ stiffness: 300, damping: 53, precision: 0.1 }}
                    adjustingSpeed={150}
                    className="text-loop"
                >
                    {skillsWithCharacters.map((entry, index) => (
                        <React.Fragment key={index + "-" + entry}>
                            <h3 >
                                {skillsWithCharacters[index]}
                            </h3>
                            <SimpleIcons 
                                name={entry}
                                className="icon--skills"
                            />
                        </React.Fragment>
                    ))}
                </TextLoop >
            ) : null}

        </main>
    );
}


export default TextLooper;

