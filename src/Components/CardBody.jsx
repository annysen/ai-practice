import { useEffect, useState } from "react";
import Button from "./Button";
import Card from "./Card";
import Modal from "./Modal";

const CardBody = () => {
  const [data, setData] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [id, setId] = useState(null);
  const [singleData, setSingleData] = useState([]);

  const handleShowAll = () => {
    setShowAll(true);
  };

  const getId = (id) => {
    setId(id);
    console.log(id);
  };

  const sortByDate = () => {
    const sortedData = data.sort((a, b) => {
      return new Date(a.published_in) - new Date(b.published_in);
    });
    setData([...data, sortedData]);
  };

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch(
        `https://openapi.programming-hero.com/api/ai/tools`
      );
      const value = await res.json();
      setData(value.data.tools);
    };
    loadData();
  }, []);

  useEffect(() => {
    const loadIdData = async () => {
      const res = await fetch(
        `https://openapi.programming-hero.com/api/ai/tool/${id}`
      );
      const value = await res.json();
      setSingleData(value.data);
    };
    loadIdData();
  }, [id]);
  //   console.log(singleData);

  return (
    <div className="p-7 ">
      <span onClick={sortByDate}>
        <Button>Short by Date</Button>
      </span>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-5 ">
        {data &&
          data
            .slice(0, showAll ? 12 : 6)
            .map((d) => <Card data={d} key={d.id} getId={getId} />)}
      </div>
      {!showAll && (
        <span onClick={handleShowAll}>
          <Button>Show All</Button>
        </span>
      )}

      <div>
        <Modal singleData={singleData} />
      </div>
    </div>
  );
};

export default CardBody;
