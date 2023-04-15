import styled from "styled-components";

export default ({ worldInfo, recordInfo, expanded }) => {
  console.log(worldInfo);
  return (
    <Container expanded={expanded}>
      <thead>
        <tr>
          <th>Level</th>
          <th>Target</th>
          <th>Best</th>
          <th>Times Beaten</th>
          <th>First Date</th>
        </tr>
      </thead>
      <tbody>
        {worldInfo.map((info, levelNumber) => {
          const targetMet = recordInfo
            ? recordInfo[levelNumber]
              ? recordInfo[levelNumber]["best time"] <= info.target
              : false
            : false;
          return (
            <TableRow key={levelNumber} targetMet={targetMet}>
              <td>{info.name}</td>
              <td>{info.target}s</td>

              <td>
                {recordInfo
                  ? recordInfo[levelNumber]
                    ? `${recordInfo[levelNumber]["best time"]}s`
                    : "-"
                  : "-"}
              </td>
              <td>
                {recordInfo
                  ? recordInfo[levelNumber]
                    ? `${recordInfo[levelNumber]["times beaten"]}`
                    : "0"
                  : "0"}
              </td>
              <td>
                {recordInfo
                  ? recordInfo[levelNumber]
                    ? `${recordInfo[levelNumber]["first beaten"]}`
                    : "-"
                  : "-"}
              </td>
            </TableRow>
          );
        })}
      </tbody>
    </Container>
  );
};

const Container = styled.table`
  transform: scaleY(${({ expanded }) => (expanded ? "100%" : "0%")});
  transition: margin-bottom 0.5s ease-in-out, transform 0.5s ease-in-out;
  transform-origin: top center;
  margin: auto;
  margin-bottom: ${({ expanded }) => (expanded ? "0" : "-14.5em")};
`;

const TableRow = styled.tr`
  & td {
    color: ${({ targetMet }) => targetMet && "var(--color-accent)"};
		margin: 0 0.25em;
  }
`;
