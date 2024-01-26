import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React, { useEffect, useState } from "react";

// function App() {
//     const[userName, setUserName]=useState('Arthur');
//     const[userFamily, setUserFamily]=useState('Bagramyan');
//     const[userAge, setUserAge]=useState('29');

//    return (
//     <div>
//         <div>
//         <span>{userName}</span>
//         <button onClick={()=>setUserName('Sergey')}>сменить имя</button>
//         </div>
//         <div>
//         <span>{userFamily}</span>
//         <button onClick={()=>setUserFamily('Pushkin')}>сменить фамилию</button>
//         </div>
//         <div>
//         <span>{userAge}</span>
//         <button onClick={()=>setUserAge('30')}>сменить возраст</button>
//         </div>
//     </div>
//     );
// }

// function App() {
//   const [banUser, setBanUser]=useState(false);

//   return <div>
//       <span>{banUser ? 'пользователь забанен ' : 'пользователь разбанен '}</span>
//       {
//         banUser ?
//          <button onClick={()=>setBanUser(false)}>Разбанить</button>
//         : <button onClick={()=>setBanUser(true)}>забанить</button>
//       }

//   </div>;
// }

// function App() {
//   const [count, setCount]=useState(0);

//   function clickHandler() {
//     setCount(count + 1);
//   }

//   return <div>
//     <span>{count}</span>
//     <button onClick={clickHandler}>+</button>
//   </div>;
// }

// function App() {
//   const [count, setCount]=useState(0);

//   return <div>
//     <span>{count}</span>
//     <button onClick={()=>setCount(count+1)}>+</button>
//     <button onClick={()=>setCount(count-1)}>-</button>
//   </div>;
// }

// function App() {
//   const [value, setValue]=useState('text');

//   // function handleChange(event) {
//   //   setValue(event.target.value); //ссылка на DOM элемент инпута

//   // }

//   return <div>
//     <input value={value} onChange={event=>setValue(event.target.value)} />
//     <p>text:{value}</p>
//   </div>;
// }

// function App() {
//   const [cat, setCat]=useState('');
//   const [dog, setDog]=useState([]);

//   return <div>
//     <input cat={cat} onChange={event=>setCat(event.target.value)} />
//     <p>text: {cat}</p>
//     <input dog={dog} onChange={event=>setDog(event.target.value)} />
//     <p>text: {dog}</p>
//   </div>;
// }

// function App() {
//   const [value, setValue]=useState(0);

//   function handleChange(event) {
//     setValue(event.target.value);
//   }

//   return <div>
//     <input value={value} onChange={handleChange} />
//     <p>{value ** 2}</p>
//   </div>;
// }

// function square(date) {
//   return Date - date;
// }

// function App() {

//   const [userBirthday, setUserBirthday]=useState('');
//   const [newDate,setNewDate]=useState(0);
//   // useEffect(()=>{

//     // },[userBirthday])

//     function handleChange(event) {
//       setUserBirthday(event.target.value);
//     }
//     const handleClick = () => {
//       const status=Date.parse(new Date)
//       setNewDate(status - Date.parse(userBirthday))

//     }

//    return <div>
//     <input type="date" userBirthday={Date.parse(userBirthday)} onChange={handleChange} />

//     <button onClick={handleClick}>рассчитать возраст</button>
//     <p>{newDate}</p> //что-то не то
//   </div>;
// }

// function App() {
//   const [fahrenheit, setFahrenheit]=useState(0);
//   const [celsius, setCelcius]=useState(0);

//   // function celsiusToFahrenheit(celsius)  {
//   //   setFahrenheit(celsius * 9/5 + 32);
//   // }

//   function handleClick(e)  {
//    const res= setCelcius((e.target.value - 32) * 5/9);
//   }

//   return (
//     <div>
//       <div>
//       <input farengeit={fahrenheit} onChange={handleClick} />
//       <p>{celsius}</p>
//       </div>

//     </div>
//   )
// }

// function App() {
//   const [value1, setValue1]=useState(0);
//   const [value2, setValue2]=useState(0);
//   const [value3, setValue3]=useState(0);
//   const [value4, setValue4]=useState(0);
//   const [value5, setValue5]=useState(0);
//   let arr=[];

//   function handleChange1(e) {
//     setValue1(+e.target.value);
//   }
//   function handleChange2(e) {
//     setValue2(+e.target.value);
//   }
//   function handleChange3(e) {
//     setValue3(+e.target.value);
//   }
//   function handleChange4(e) {
//     setValue4(+e.target.value);
//   }
//   function handleChange5(e) {
//     setValue5(+e.target.value);
//   }

//   return (
//     <div>
//       <input value={value1} onChange={handleChange1} />
//       <input value={value2} onChange={handleChange2} />
//       <input value={value3} onChange={handleChange3} />
//       <input value={value4} onChange={handleChange4} />
//       <input value={value5} onChange={handleChange5} />
//       <p>result:{(value1+value2+value3+value4+value5)/arr.length}</p>
//     </div>
//   );
// }

// function App() {
//   const [value1, setValue1]=useState(0);
//   const [value2, setValue2]=useState(0);
//   const [result, setResult]=useState(0);

//   return <div>
//     <input value={value1} onChange={event=>setValue1(event.target.value)} />
//     <input value={value2} onChange={event=>setValue2(event.target.value)} />

//     <button onClick={()=>setResult(Number(value1)+Number(value2))}>+</button>
//     <button onClick={()=>setResult(Number(value1)*Number(value2))}>*</button>
//     <button onClick={()=>setResult(Number(value1)/Number(value2))}>/</button>
//     <button onClick={()=>setResult(Number(value1)-Number(value2))}>-</button>
//     <p>result: {result}</p>
//   </div>;

// }

// function App() {
// const [value,setValue]=useState('');
// const [sum, setSum]=useState(0);

// function handleChange(e) {
//   setValue((e.target.value)
//   .replace(/\D/g,''))
// }

// useEffect(() => {
//   const arr=value.split("")
//   arr.map(item => setSum(sum + +item))
// }, [value])

// return <div>
//   <textarea type='number' value={value} onChange={handleChange} />
//   <p>{sum}</p>
// </div>;
// }

// function App() {
//   const [cheked,setChecked]=useState(true);

//   function handleChange() {
//     setChecked(!cheked); //инвертируем стейт
//   }

//   return <div>
//     <input type='checkbox' checked={cheked} onChange={handleChange} />
//     <p>состояние: {cheked ? 'Добрый день!' : 'Прощайте'}</p>
//   </div>;
// }
//https://shchypanov.github.io/site/practiceJS/index.html

// function App() {
//   const [cheked1,setChecked1]=useState(true);
//   const [cheked2,setChecked2]=useState(true);
//   const [cheked3,setChecked3]=useState(true);

//   function handleChange1() {
//     setChecked1(!cheked1); //инвертируем стейт
//   }
//   function handleChange2() {
//     setChecked2(!cheked2); //инвертируем стейт
//   }
//   function handleChange3() {
//     setChecked3(!cheked3); //инвертируем стейт
//   }

//   return <div>
//     <p>Какие языки вы знаете?</p>
//     <input type='checkbox' checked={cheked1} onChange={handleChange1} value="html"/> html
//     <input type='checkbox' checked={cheked2} onChange={handleChange2} value="css"/> css
//     <input type='checkbox' checked={cheked3} onChange={handleChange3} value="js"/> js
//     <p>Вы знаете: {(cheked1===true) ? 'html, ' : ""}
//     {(cheked2===true) ? 'css ' : ""}
//     {(cheked3===true) ? 'js ' : ""}</p>

//   </div>;
// }

// function App() {
//   const [checked, setChecked]=useState(true);

//   let message;
//   if(checked) {
//     message=<div>
//     <h2>Ура, вам уже есть 18</h2>
//     <p>
//       здесь расположен контент только для взрослых
//     </p>
//   </div>
//   }else {
//     message=<div>
//     <p>
//       увы, вам еще нет 18 лет:
//     </p>
//   </div>
//   }

//   return <div>
//     <p>Подствердите, есть ли Вам 18 лет?</p>
//     <input type="checkbox" checked={checked} onChange={()=>setChecked(!checked)} /> Подтвердить
//     <div>{message}</div>
//   </div>
// }

// function App() {
//   const [checked, setChecked]=useState(true);

//   let message;
//   if(checked) {
//     message=<div>
//     <h2>Ура, вам уже есть 18</h2>
//     <p>
//       здесь расположен контент только для взрослых
//     </p>
//   </div>
//   }

//   return <div>
//     <p>Подтвердите, есть ли Вам 18 лет?</p>
//     <input type="checkbox" checked={checked} onChange={()=>setChecked(!checked)} /> Подтвердить
//     <div>{message}</div>
//   </div>
// }

// function App() {
//   const [value,setValue]=useState('');

//   function handleChange(e) {
//     setValue(e.target.value);
//   }

//   return <div>
//     <select value={value} onChange={handleChange}>
//       <option>Мадрид</option>
//       <option>Симферополь</option>
//       <option>Багдад</option>
//       <option>Париж</option>
//     </select>
//     <p>
//       Ваш выбор: {value}
//     </p>
//   </div>
// }

// function App() {
//   const texts=['text1','text2','text3','text4'];
//   const[value,setValue]=useState('');

//   const options=texts.map((text,index)=>{
//     return <option key={index}>{text}</option>;
//   });

//   return <div>
//     <select value={value} onChange={(e)=>setValue(e.target.value)}>
//       {options}
//     </select>
//     <p>
//       ваш выбор: {value}
//     </p>
//   </div>

// }

// function App() {
// 	const [value, setValue] = useState('');

// 	return <div>
// 		<select value={value} onChange={(event) => setValue(event.target.value)}>
//       <option value="0">К какой возрастной группе вы относитесь?</option>
// 			<option value="1">от 0 до 12 лет</option>
// 			<option value="2">от 13 до 17 лет</option>
// 			<option value="3">от 18 до 25 лет</option>
//       <option value="4">старше 25 лет</option>
// 		</select>
// 		<p>
//       {value === '1' && 'вы выбрали первый пункт'}
// 			{value === '2' && 'вы выбрали второй пункт'}
// 			{value === '3' && 'вы выбрали третий пункт'}
//       {value === '4' && 'вы выбрали четвертый пункт'}
// 		</p>
// 	</div>;
// }

// function App() {
// 	const texts = ['text1', 'text2', 'text3', 'text4'];
// 	const [value, setValue] = useState('');

// 	const options = texts.map((text, index) => {
// 		return <option key={index} value={index}>{text}</option>;
// 	});

// 	return <div>
// 		<select value={value} onChange={event => setValue(event.target.value)}>
// 			{options}
// 		</select>
// 		<p>
// 			ваш выбор: {texts[value]}
// 		</p>
// 	</div>;
// }

// function App() {
// 	const [value, setValue] = useState(1);

// 	function changeHandler(event) {
// 		setValue(event.target.value);
// 	}

// 	return <div>
// 		<input
// 			type="radio"
// 			name="html"
// 			value="1"
// 			checked={value === '1' ? true : false}
// 			onChange={changeHandler}
// 		/> html
// 		<input
// 			type="radio"
// 			name="css"
// 			value="2"
// 			checked={value === '2' ? true : false}
// 			onChange={changeHandler}
// 		/> css
// 		<input
// 			type="radio"
// 			name="js"
// 			value="3"
// 			checked={value === '3' ? true : false}
// 			onChange={changeHandler}
// 		/> js
//     <p>{(value==='1') ? 'html' : ''}
//       {(value==='2') ? 'css' : ''}
//       {(value==='3') ? 'JS. Какой вы молодец!' : ''}</p>
// 	</div>
// }

// function App() {
//   const[checked,setChecked]=useState(true);

//   return <div>
//     <input type="checkbox" defaultChecked={checked} />
//   </div>
// }

// function App() {
// 	const [value, setValue] = useState('text');

// 	return <div>
// 		<input defaultValue={value} />
// 	</div>;
// }

///++++++
// function getSum(arr) {
// 	let sum = 0;

// 	for (const elem of arr) {
// 		sum += +elem;
// 	}

// 	return sum;
// }

// function App() {
// 	const [notes, setNotes] = useState([1, 2, 3]);

// 	function changeHandler(index, event) {
//     setNotes([...notes.slice(0, index),
//     event.target.value, ...notes.slice(index + 1)]);
// 		// общая функция-обработчик
// 	}

// 	return <div>
// 		<input value={notes[0]} onChange={event => changeHandler(0, event)} />
// 		<input value={notes[1]} onChange={event => changeHandler(1, event)} />
// 		<input value={notes[2]} onChange={event => changeHandler(2, event)} />

// 		{getSum(notes)}
// 	</div>;
// }

///+++
// function getSum(arr) {
// 	let sum = 0;

// 	for (const elem of arr) {
// 		sum += +elem;
// 	}

// 	return sum/arr.length;
// }

// function App() {
// 	const [notes, setNotes] = useState([1, 2, 3,4,5,6,7,8,9]);

// 	function changeHandler(index, event) {
//     setNotes([...notes.slice(0, index),
//     event.target.value, ...notes.slice(index + 1)]);
// 		// общая функция-обработчик
// 	}

//   const result=notes.map((note,index)=>{
//     return <input
//     key={index}
//     value={note}
//     onChange={e=>changeHandler(index,e)}
//     />;
//   });

// 	return <div>
// 		{result}
// 		{getSum(notes)}
// 	</div>;
// }

// const initObj={
//   prop1: 'value1',
//   prop2: 'value2',
//   prop3: 'value3',
// }

// function App() {
//   const[obj, setObj]=useState(initObj);

//   // function handleChange(prop, event) {
//   //   const copy = Object.assign({}, obj);
//   //   copy[prop] = event.target.value;
//   //   setObj(copy);
//   // }

//   function handleChange(prop, event) {
//     setObj({...obj, ...{[prop]: event.target.value}});
//   }

//   return <div>
//     <input value={obj.prop1} onChange={e=>handleChange('prop1',e)}/>
//     <input value={obj.prop2} onChange={e=>handleChange('prop2',e)}/>
//     <input value={obj.prop3} onChange={e=>handleChange('prop3',e)}/>

//     <br />
//     {obj.prop1}-{obj.prop2}-{obj.prop3}
//   </div>
// }

////+++-
// const initDate={
//   year:  2025,
//   month: 11,
//   day:   31,
// }

// function App() {
//   const[obj, setObj]=useState(initDate);
//   const [kek, setKek] = useState()
//   const [dat, setDat] = useState()

//   function handleChange(prop, event) {
//     setObj({...obj, ...{[prop]: event.target.value}});
//   }

//   const getKek = () => {
//     const tmp = new Date()
//     tmp.setFullYear(obj.year)
//     tmp.setMonth(obj.month)
//     tmp.setDate(obj.day)
//     setKek(tmp)
//     console.log(tmp)
//   }

//   function getweekday (kek)  {
//     const days = ['ПН','ВТ','СР','ЧТ','ПТ','СБ','ВС'];
//     return setDat(days[kek.getDay()])

//   }

//   return <div>
//     <input datatype='year' value={obj.year} onChange={e=>handleChange('year',e)}/>
//     <input datatype='month' value={obj.month} onChange={e=>handleChange('month',e)}/>
//     <input datatype='day' value={obj.day} onChange={e=>handleChange('day',e)}/>

//     <br />
//     {obj.year}:{obj.month}:{obj.day}
//     <div>
//     <button onClick={getKek}>AAZAZA</button>
//     </div>
//     {kek && kek.getDay()}

//   </div>
// }

// function App() {
//   const [notes, setNotes]=useState([1,2,3,4,5]);

//   const result=notes.map((note,index)=>{
//     return <li key={index}>{note}</li>;
//   });

//   return <div>
//     <ul>
//       {result}
//     </ul>
//     <button onClick={()=>setNotes([...notes, 'ku'])}>+</button>
//   </div>
// }

// function App() {
//   const[notes, setNotes]=useState([1,2,3,4,5]);

//   const result=notes.map((note,index)=>{
//     return <li key={index} onClick = {()=>doSmth(index)}>
//       {note}
//     </li>;
//   });

//   function doSmth(index) {
//     let copy=Object.assign([],notes);
//     copy[index] += '!';
//     setNotes(copy);
//   }

//   return <div>
//     <ul>
//       {result}
//     </ul>
//   </div>;
// }

// function App() {
//   const[notes, setNotes]=useState([1,2,3,4,5]);

//   const result=notes.map((note,index)=>{
//     return <li key={index} onClick = {()=>doSmth(index)}>
//       {note}
//     </li>;
//   });

//   function doSmth(index) {
//     let copy=Object.assign([index],notes)
//     delete (copy[index]) //удалет элемент из списка
//     // copy[index] = delete notes[index] //стирает элемент из списка
//     // copy[index]=copy.splice(index); //складывает элемент с последующими
//     // copy.splice(notes[index]) //удаляем все элементы до текущего

//     setNotes(copy);
//   }

//   return <div>
//     <ul>
//       {result}
//     </ul>
//   </div>;
// }

// function App() {
//   const[notes, setNotes]=useState([1,2,3,4,5]);

//   const result=notes.map((note,index)=>{
//     return <li key={index} onClick = {()=>doSmth(index)}>
//       {note}
//     </li>;
//   });

//   function doSmth(index) {
//     let copy=Object.assign([],notes)
//     copy[index] **= 2
//     // delete (copy[index]) //удалет элемент из списка
//     // copy[index] = delete notes[index] //стирает элемент из списка
//     // copy[index]=copy.splice(index); //складывает элемент с последующими
//     // copy.splice(notes[index]) //удаляем все элементы до текущего

//     setNotes(copy);
//   }

//   return <div>

//     <ul>
//       {result}
//     </ul>
//   </div>;
// }

// //++
// const initNotes =[
//   {
// 		id: 'GYi9G_uC4gBF1e2SixDvu',
// 		prop1: 'value11',
// 		prop2: 'value12',
// 		prop3: 'value13',
// 	},
// 	{
// 		id: 'IWSpfBPSV3SXgRF87uO74',
// 		prop1: 'value21',
// 		prop2: 'value22',
// 		prop3: 'value23',
// 	},
// 	{
// 		id: 'JAmjRlfQT8rLTm5tG2m1L',
// 		prop1: 'value31',
// 		prop2: 'value32',
// 		prop3: 'value33',
// 	},
// ]

// function App() {
//   const [notes, setNotes] = useState(initNotes);
//   const [node, setNode]=useState("");

//   const result = notes.map(note => {
//     return <li key={note.id} id={note.id}>
//       <span>{note.prop1}</span>
//       <span>{note.prop2}</span>
//       <span>{note.prop3}</span>
//     </li>
//   });

//   const add = () => {
//     setNotes([...notes, {
//       id: Date.now(),
//       prop1: 'fguyuy'
//     }])
//     console.log(notes)
//   }

//   return <div>
//     <button  id='btn' onClick={add}>Добавить</button>

//     <ul>
//       {result}
//     </ul>
//   </div>
// }

//213213
// const initNotes =[
//   {
// 		id: 'GYi9G_uC4gBF1e2SixDvu',
// 		prop1: 'value11',
// 		prop2: 'value12',
// 		prop3: 'value13',
// 	},
// 	{
// 		id: 'IWSpfBPSV3SXgRF87uO74',
// 		prop1: 'value21',
// 		prop2: 'value22',
// 		prop3: 'value23',
// 	},
// 	{
// 		id: 'JAmjRlfQT8rLTm5tG2m1L',
// 		prop1: 'value31',
// 		prop2: 'value32',
// 		prop3: 'value33',
// 	},
// ]

// function App() {
//   const [notes, setNotes] = useState(initNotes);
//   const [node1, setNode1]=useState("");
//   const [node2, setNode2]=useState("");
//   const [node3, setNode3]=useState("");

//   const result = notes.map(note => {
//     return <li key={note.id} >
//       <span>{note.prop1}</span>
//       <span>{note.prop2}</span>
//       <span>{note.prop3}</span>
//     </li>
//   });

//   const add = () => {
//     setNotes([...notes, {
//       id: Date.now(),
//       prop1: node1,
//       prop2: node2,
//       prop3: node3,
//     }])
//     console.log(notes)
//   }

//   return <div>
//     <div>
//     <input value={node1} onChange={e=>setNode1(e.target.value)}/>
//     <input value={node2} onChange={e=>setNode2(e.target.value)}/>
//     <input value={node3} onChange={e=>setNode3(e.target.value)}/>
//     </div>

//     <button  id='btn' onClick={add}>Добавить</button>

//     <ul>
//       {result}
//     </ul>
//   </div>
// }

///656+56+6
// const initNotes =[
//   {
// 		id: 'GYi9G_uC4gBF1e2SixDvu',
// 		prop1: 'value11',
// 		prop2: 'value12',
// 		prop3: 'value13',
// 	},
// 	{
// 		id: 'IWSpfBPSV3SXgRF87uO74',
// 		prop1: 'value21',
// 		prop2: 'value22',
// 		prop3: 'value23',
// 	},
// 	{
// 		id: 'JAmjRlfQT8rLTm5tG2m1L',
// 		prop1: 'value31',
// 		prop2: 'value32',
// 		prop3: 'value33',
// 	},
// ]

// function App() {
// 	const [notes, setNotes] = useState(initNotes);

//   function doSmth(id) {
//     setNotes(notes.filter(item=> item.id !== id)) //если айди совпадает удалить элемент из списка
//   }

// 	const result = notes.map(note => {
// 		return <li key={note.id}>
// 			<span>{note.prop1}</span>
// 			<span>{note.prop2}</span>
// 			<span>{note.prop3}</span>

// 			<button onClick ={() => doSmth(note.id)}>
// 				btn
// 			</button>
// 		</li>;
// 	});

// 	return <div>
// 		<ul>
// 			{result}
// 		</ul>
// 	</div>;
// }

//-------
// const initNotes =[
//   {
// 		id: 'GYi9G_uC4gBF1e2SixDvu',
// 		prop1: 'value11',
// 		prop2: 'value12',
// 		prop3: 'value13',
// 	},
// 	{
// 		id: 'IWSpfBPSV3SXgRF87uO74',
// 		prop1: 'value21',
// 		prop2: 'value22',
// 		prop3: 'value23',
// 	},
// 	{
// 		id: 'JAmjRlfQT8rLTm5tG2m1L',
// 		prop1: 'value31',
// 		prop2: 'value32',
// 		prop3: 'value33',
// 	},
// ]

// function App() {
// 	const [notes, setNotes] = useState(initNotes);
//   const [node1, setNode1]=useState("");
//   const [node2, setNode2]=useState("");
//   const [node3, setNode3]=useState("");

//   function add (id)  {
//     notes.map(item => {
//       if(item.id == 'GYi9G_uC4gBF1e2SixDvu') {
//         setNode1([...node1, notes[0].prop1])
//       } else if ((item.id == 'IWSpfBPSV3SXgRF87uO74')) {
//         setNode2([...node2, notes[1].prop2])
//       } else if ((item.id == 'JAmjRlfQT8rLTm5tG2m1L')) {
//         setNode3([...node3, notes[2].prop3])
//       } return
//     });

//     console.log(node1)
//     console.log(node2)
//     console.log(node3)
//   };

// 	const result = notes.map(note => {
// 		return <li key={note.id}>
// 			<span>{note.prop1}</span>
// 			<span>{note.prop2}</span>
// 			<span>{note.prop3}</span>

// 			<button onClick ={() => add(note.id)}>
// 				btn
// 			</button>
// 		</li>;
// 	});

// 	return <div>
//     <input value={node1} onChange={e=>setNode1(e.target.value)}/>
//     <input value={node2} onChange={e=>setNode2(e.target.value)}/>
//     <input value={node3} onChange={e=>setNode3(e.target.value)}/>
// 		<ul>
// 			{result}
// 		</ul>
// 	</div>;
// }

//++++++
// const initNotes = [
//   {
//     id: "123456789",
//     name: "name1",
//     desc: "long description 1",
//     show: false,
//   },
//   {
//     id: "987654321",
//     name: "name2",
//     desc: "long description 2",
//     show: false,
//   },
//   {
//     id: "555555555",
//     name: "name3",
//     desc: "long description 3",
//     show: false,
//   },
// ];

// function App() {
//   const [notes, setNotes] = useState(initNotes);

//   const result = notes.map((elem) => {
//     return (
//       <>
//         <button onClick={() => clickNoteButton(elem.id)}>изменить</button>
//         <p key={elem.id}>
//           {elem.name},
//           <span style={{ color: "blue" }}>{JSON.stringify(elem.show)}</span>
//           <i>{elem.desc}</i>
//         </p>
//       </>
//     );
//   });

//   function clickNoteButton(id) {
//     const tmp = notes.map((el) => {
//         if (el.id === id) return {...el, show: !el.show}
//         return el;
//     })
//     setNotes(tmp)

    // const notes_1 = { id: Date.now(), show: true };
    // if (id === notes[0].id) {
    //   const replacementElement = Object.assign(notes[0], notes_1);
    //   setNewNotes(replacementElement);
    // } else if (id === notes[1].id) {
    //   const replacementElement = Object.assign(notes[1], notes_1);
    //   setNewNotes(replacementElement);
    // } else if (id === notes[2].id) {
    //   const replacementElement = Object.assign(notes[2], notes_1);
    //   setNewNotes(replacementElement);
    // }
    // console.log(notes);
//   }

//   return <div>{result}</div>;
// }

// const initNotes =[
//   {
//     id: 'GYi9G_uC4gBF1e2SixDvu',
//     prop1: 'value11',
//     prop2: 'value12',
//     prop3: 'value13',
//   },
//   {
//     id: 'IWSpfBPSV3SXgRF87uO74',
//     prop1: 'value21',
//     prop2: 'value22',
//     prop3: 'value23',
//   },
//   {
//     id: 'JAmjRlfQT8rLTm5tG2m1L',
//     prop1: 'value31',
//     prop2: 'value32',
//     prop3: 'value33',
//   },
// ]

// function App() {

//   const [input1, setInput1] = useState("");
//   const [input2, setInput2] = useState("");
//   const [input3, setInput3] = useState("");

//   const result = initNotes.map(note => {
//     return <><button  id='btn' onClick={()=>
//     clickNoteBotton(note.id)}>Добавить</button>
//     <li key={note.id} >
//     <span>{note.prop1}</span>
//     <span>{note.prop2}</span>
//     <span>{note.prop3}</span>
//   </li></>
//   });

//   function clickNoteBotton (id) {
//     if (id === initNotes[0].id) {
//     setInput1(initNotes[0].prop1 + ' '
//     + initNotes[0].prop2 + ' '
//     + initNotes[0].prop3)
//   } else if (id === initNotes[1].id) {
//     setInput2(initNotes[1].prop1 + ' '
//     + initNotes[1].prop2 + ' '
//     + initNotes[1].prop3)
//   } else if (id === initNotes[2].id) {
//     setInput3(initNotes[2].prop1 + ' '
//     + initNotes[2].prop2 + ' '
//     + initNotes[2].prop3)
//   }
//   }

//   return <div>
//     <input value={input1} type='text' />
//     <input value={input2} type='text' />
//     <input value={input3} type='text' />

//     <ul>
//       {result}
//     </ul>
//   </div>

// }

// import Product from './Product';
// import User from "./User";
// import Employee from "./Employee";
// import Users from "./Users";

// function App() {
//   const users = [
//     {id: '123',
//     name: 'Anna',
//     firstname: 'Popova',
//     age: 22
//   },
//     {id: '111',
//     name: 'Gena',
//     firstname: 'Bukin',
//     age: 45
//   },
//     {id: '222',
//     name: 'Pashka',
//     firstname: 'Kakashka',
//     age: 300
//   },
//   ];

//   return <div>
//     <User nameUser={users[0].name}
//     firstNameUser={users[0].firstname}
//     ageUser={users[0].age} />
//     <User nameUser={users[1].name}
//     firstNameUser={users[1].firstname}
//     ageUser={users[1].age} />
//     <User nameUser={users[2].name}
//     firstNameUser={users[2].firstname}
//     ageUser={users[2].age} />
//   </div>;
// }

// function App() {

//   const users = [
//     {id: '123',
//     name: 'Anna',
//     firstname: 'Popova',
//     age: 22
//   },
//     {id: '111',
//     name: 'Gena',
//     firstname: 'Bukin',
//     age: 45
//   },
//     {id: '222',
//     name: 'Pashka',
//     firstname: 'Kakashka',
//     age: 300
//   },
//   ];

//   const result = users.map(user => {
//     return <User
//     key = {user.id}
//     idUser = {user.id}
//     nameUser = {user.name}
//     firstNameUser = {user.firstname}
//     ageUser={user.age} />
//   });

//   return <div>
//     {result}
//   </div>;
// }

// function App() {
//   return <Users />
// }

import Calculator from "./Calculator";
import './App.css';

function App() {
   return <div className="Wrapper">
    <div className="Page1">To-Do <span id='text'>UI</span></div>

   <div className="Gaga">
   
    <Calculator />
   </div>
   
   </div> 
}

export default App;
