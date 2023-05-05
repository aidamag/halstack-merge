import * as React from "react";
import Table from "../Table";
import Inset from "../../Inset/Inset";

export default (
  <Inset space="2rem" uxpId="inset">
    <Table uxpId="table">
      <thead>
        <tr>
          <th>header 1</th>
          <th>header 2</th>
          <th>header 3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>cell 1</td>
          <td>cell 2</td>
          <td>cell 3</td>
        </tr>
        <tr>
          <td>cell 4</td>
          <td>cell 5</td>
          <td>cell 6</td>
        </tr>
        <tr>
          <td>cell 7</td>
          <td>cell 8</td>
          <td>Cell 9</td>
        </tr>
      </tbody>
    </Table>
  </Inset>
);
