import React from 'react';
import styled from 'styled-components';

const MAX_PG_LENGTH = 10;
const MAX_CENTER_PG_NUM_OFFSET = 2; // i.e. max # of index btns on either side of center btn

const PageNavContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 1.5em;
  & > div {
    margin-top: 0.25em;
  }
`;

const PageNavButton = styled.button`
  width: 2.5em;
`;

const PageIndexButton = styled(PageNavButton)`
${p =>
    p.selected &&
  `
    color: white;
    background-color: #343a40;
  `};
`;

const PageRange = ({ pageNum, pageLength, totalResults }) => {
  const lowerBound = (pageNum * MAX_PG_LENGTH) - (MAX_PG_LENGTH - 1);
  const upperBound = ((pageNum - 1) * MAX_PG_LENGTH) + pageLength;

  return (
    <div>
      <span>
        {`Showing ${lowerBound} to ${upperBound} of ${totalResults} titles`}
      </span>
    </div>
  );
};

const PageSelection = ({ pageNum, totalResults, selectPage }) => {
  const lastPageNum = Math.ceil(totalResults / MAX_PG_LENGTH);
  const prevDisabled = pageNum === 1;
  const nextDisabled = pageNum === lastPageNum;

  return (
    <div>
      <PageNavButton
        onClick={() => selectPage(1)}
        disabled={prevDisabled}
      >
        &lt;
      </PageNavButton>
      <IndexButtonGroup
        pageNum={pageNum}
        lastPageNum={lastPageNum}
        selectPage={selectPage}
      />
      <PageNavButton
        onClick={() => selectPage(lastPageNum)}
        disabled={nextDisabled}
      >
        &gt;
      </PageNavButton>
    </div>
  );
};

const IndexButtonGroup = ({ pageNum, lastPageNum, selectPage }) => {
  const lowerBound = pageNum > MAX_CENTER_PG_NUM_OFFSET
    ? pageNum - MAX_CENTER_PG_NUM_OFFSET
    : 1;
  const upperBound = pageNum + MAX_CENTER_PG_NUM_OFFSET > lastPageNum
    ? lastPageNum
    : pageNum + MAX_CENTER_PG_NUM_OFFSET;

  const buttonsLength = upperBound - lowerBound + 1;

  // array with vals 0...buttonsLength
  const indexList = [...Array(buttonsLength).keys()];

  return (
    <>
      {indexList.map(n => {
        const buttonNum = n + lowerBound;
        return (
          <PageIndexButton
            key={n}
            onClick={() => selectPage(buttonNum)}
            selected={pageNum === buttonNum}
          >
            {buttonNum}
          </PageIndexButton>
        );
      })}
    </>
  );
};

const PageNav = ({ pageNum, pageLength, totalResults, selectPage }) => {
  return (
    <PageNavContainer>
      <PageRange
        pageNum={pageNum}
        pageLength={pageLength}
        totalResults={totalResults}
      />
      <PageSelection
        pageNum={pageNum}
        totalResults={totalResults}
        selectPage={selectPage}
      />
    </PageNavContainer>
  );
};

export default PageNav;