import * as React from "react";
import Paginator from "../Paginator";
import Inset from "../../Inset/Inset";

export default (
  <Paginator
    uxpId="paginator"
    currentPage={1}
    itemsPerPage={5}
    itemsPerPageOptions={[5, 10, 15]}
    totalItems={27}
  />
);
