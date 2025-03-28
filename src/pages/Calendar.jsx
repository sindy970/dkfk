

const Calendar = () => {
    return (
      <>
          <div className="calendar-area">
              <div className="calendar-text">
                  <h2 className="mt10 yel">Calendar</h2>
                  <h2 className="mt10 yel">5월</h2>
              </div>
              <table className="mt20 calendar-table">
                  <thead>
                  <tr>
                      <td className="red">일</td>
                      <td>월</td>
                      <td>화</td>
                      <td>수</td>
                      <td>목</td>
                      <td>금</td>
                      <td>토</td>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>01</td>
                      <td>02</td>
                      <td>03</td>
                  </tr>
                  <tr>
                      <td className="red">04</td>
                      <td>05</td>
                      <td>06</td>
                      <td>07</td>
                      <td>08</td>
                      <td>09</td>
                      <td>10</td>
                  </tr>
                  <tr>
                      <td className="red">11</td>
                      <td>12</td>
                      <td>13</td>
                      <td>14</td>
                      <td>15</td>
                      <td>16</td>
                      <td>17</td>
                  </tr>
                  <tr>
                      <td className="red">18</td>
                      <td>19</td>
                      <td>20</td>
                      <td>21</td>
                      <td>22</td>
                      <td>23</td>
                      <td>24</td>
                  </tr>
                  <tr>
                      <td className="calendar-num">25</td>
                      <td>26</td>
                      <td>27</td>
                      <td>28</td>
                      <td>29</td>
                      <td>30</td>
                      <td>31</td>
                  </tr>
                  </tbody>
              </table>
          </div>
      </>
    );
}

export default Calendar;