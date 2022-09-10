import { Statistics } from "./Statistics.styled";

export const StatisticsList = ({stats})=>{
    return (
        <Statistics>
            <h2>Upload statsgi</h2>
            {stats.map(stat => (<div>
                key={stat.id}
            label={stat.label}
            percentage={stat.percentage}
            </div>))}

            

            <section class="statistics">
  <h2 class="title">Upload stats</h2>

  <ul class="stat-list">
    <li class="item">
      <span class="label">.docx</span>
      <span class="percentage">4%</span>
    </li>
    <li class="item">
      <span class="label">.mp3</span>
      <span class="percentage">14%</span>
    </li>
    <li class="item">
      <span class="label">.pdf</span>
      <span class="percentage">41%</span>
    </li>
    <li class="item">
      <span class="label">.mp4</span>
      <span class="percentage">12%</span>
    </li>
  </ul>
</section>



        </Statistics>  
  );
};