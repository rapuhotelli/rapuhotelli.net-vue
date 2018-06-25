<template>
  <div class="sidebar">
    <div className="archive-header">
      <h2>Archive</h2>
    </div>
    <div className="series-select">
      <h4>Filter by series</h4>
      <div className="serie-container">
        <!-- <span className={this.state.filter==='all'?'active':''} onClick={() => this.setFilter('all')}>ALL</span> -->
        <span>ALL</span>
      </div>
      <!--
        loop series
      -->
      <div className="serie-container">
        ,
        <!-- <span className={this.state.filter===serie?'active':''} onClick={() => this.setFilter(serie)}> -->
          web
      </div>
    </div>
    <ul>
      
      <!--
      {
        //this.getPostsRange().map(({ node }) => <ArchiveItem key={node.fields.slug} node={node} />)
        this.getFilteredPosts().map(({ node }) => <ArchiveItem key={node.fields.slug} node={node} />)
      }
      -->
    </ul>
  </div>
</template>

<style scoped>

.sidebar {
  grid-area: side;
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 0;
}

.archive-header {
  border-bottom: 5px solid #e64946;
  display: flex;
  /* margin-top: 2.175rem; */
  margin-bottom: 0.725rem;
}
.archive-header >>> h2 {
    /* margin: 0; */
    margin-bottom: 0;
  }
.archive-header >>> .archive-browse {
    text-align: right;
    flex-grow: 1;
  }

ul {
  list-style-type: none;
  margin-left: 0;
  display: flex;
  flex-flow: row wrap;
}
ul >>> li {
  flex: 1 0 100%;
}

@media (max-width: 800px) {
  .archive-browse {
    font-size: 24px;
  }
  .archive-items {
    text-align: center;
  }
  .archive-items >>> ul {
    display: inline-block;
    text-align: left;
  }
  .archive-items >>> li {
    margin-bottom: 10px;
  }
}


.series-select {
  font-size: 14px;
  margin-bottom: 5px;
}
.series-select >>> h4 {
  margin: 0;
}

.serie-container {
  color: #e64946;
  cursor: pointer;
  display: inline;
}
.active {
  text-decoration: underline;
}

.selection-arrow {
  color: gray /* ${colors.gray} */
}

</style>