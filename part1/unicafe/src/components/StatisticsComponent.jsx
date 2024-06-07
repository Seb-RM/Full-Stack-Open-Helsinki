
const StatisticsLine = ({text, state}) =>{
    return (
        <tr>
            <td>{text} </td>
            <td>{state}</td>
        </tr>
    );
};

export default StatisticsLine;