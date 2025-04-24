import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import RepairServiceCard from "@/app/components/RepairServiceCard";
import { redirect } from "next/navigation";
import ServiceSingle from "./ServiceSingle";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const Service = async () => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/device/public/list?status=true`
  );
  const li = await data.json();
  const list = li?.data;
  console.log(
    "process.env.NEXT_PUBLIC_BASE_URL",
    process.env.NEXT_PUBLIC_BASE_URL
  );
  console.log("services", list);

  // const router = useRouter();
  // const params = useParams();
  // const searchParams = useSearchParams();
  // const [list, setList] = useState([]);
  // const [loading, setLoading] = useState(false);

  const navigate = (item) => {
    // href={
    //   item?.parent_id === null
    //     ? `/device-list/${item._id}`
    //     : `/service/${item._id}`
    // }
    console.log("item", item);

    if (list?.some((el) => el.parent_id === item._id)) {
      redirect(`/services/${item._id}`);
    } else {
      redirect(`/device-list/${item._id}?device_name=${item.name}`);
    }
  };

  // const getData = async () => {
  //   setLoading(true);

  //   let url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/device/public/list?status=true`;
  //   let allData = await getDataWithToken(url);

  //   console.log("after childDevice list", allData?.data?.data);

  //   if (allData.status >= 200 && allData.status < 300) {
  //     setList(allData?.data?.data);
  //   } else {
  //     setLoading(false);
  //   }
  //   setLoading(false);
  // };
  // useEffect(() => {
  //   getData();
  // }, []);
  return (
    <Box sx={{ pt: { sm: 0, md: 10 }, pb: 10 }}>
      <Container maxWidth="xl">
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mb: 6 }}>
          <Typography variant="body1" color="primary">
            SERVICES
          </Typography>
          <Typography variant="h3">Available Services</Typography>
        </Box>
        {/* <Grid container spacing={3}>
          {services?.data?.length > 0 &&
            services?.data?.map((item, i) => (
              <Grid size={{ xs: 12, sm: 4, md: 4 }} key={i}>
                <CardOne item={item} />
              </Grid>
            ))}
        </Grid> */}
        <Grid container spacing={3}>
          <ServiceSingle list={list} />
        </Grid>
        {/* {loading && <SectionLoading />} */}
      </Container>
    </Box>
  );
};

export default Service;
