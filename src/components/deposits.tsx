import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Title from "./dashboard/title";
import { createClient } from "@/utils/supabase/server";
import { Box } from "@mui/material";

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default async function Deposits() {
  const supabase = createClient();
  const { data: notes } = await supabase.from("notes").select();
  return (
    <React.Fragment>
      <Title>Recent Deposits</Title>
      <Typography component="p" variant="h4">
        $3,024.00
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 15 March, 2019
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
      <Box>{notes}</Box>
    </React.Fragment>
  );
}
