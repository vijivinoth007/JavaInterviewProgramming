import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModuleComponent } from '../module/module.component';
import { EventEmitterService } from '../event-emitter.service';
import { InterviwprblmService } from '../service/interviwprblm.service';



declare const hello:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router,private eventEmitterService: EventEmitterService,private interviwprblmservice:InterviwprblmService) { 
    this.removeExisiting();
  }

  inputvalue : string ;
  temp  ; string ="";


  ngOnInit() {

    var check: any;
   window.scrollTo(0,0);
   
   var headerPosition = $('header').position().top;
    $(window).on('scroll', function () {
        var scrollPosition = $(window).scrollTop();
        
        if (scrollPosition >= headerPosition) {
            $('header').addClass(' nav-scrolled');
        } else {
            $('header').removeClass(' nav-scrolled');
        }
    });  

    this.eventEmitterService.getProblemCommon("AllProblems");

  }


  clickHomeButton() 
  {
    this.router.navigate([""]);
  }

  clickArraysandString()
  {
    this.eventEmitterService.getProblemCommon("ArraysandString");
  }

  clickLinkedList()
  {
    this.eventEmitterService.getProblemCommon("LinkedList");
  }

  clickTreesandGraph()
  {
    this.eventEmitterService.getProblemCommon("TreesandGraph");
  }

  clickSortingandSearching()
  {
    this.eventEmitterService.getProblemCommon("SortingandSearching");
  }
  
  clickRecursion()
  {
    this.eventEmitterService.getProblemCommon("Recursion");
  }

  clickDesign()
  {
    this.eventEmitterService.getProblemCommon("Design");
  }
  
  clickDynamicProblems()
  {
    this.eventEmitterService.getProblemCommon("DynamicProblems");
  }

  clickOtherProblems()
  {
    this.eventEmitterService.getProblemCommon("OtherProblems");
  }

 clickSearch()
 {
    this.removeExisiting();

     if (this.inputvalue != "")
     {
        this.searchvalue(this.inputvalue);
     }
 }

 removeExisiting()
 {
    var containertemp = document.all;
    var inputstemp, index;
    
    inputstemp = document.getElementsByTagName('div');
    for (index = 0; index < inputstemp.length; ++index) 
    {
        $('span').removeClass("highlight");
    }
 }
  
  searchvalue(name:string)
    {
        var InstantSearch = {
        "highlight": function (container, highlightText)
        {
            var internalHighlighter = function (options)
            {
    
                var id = {
                    container: "container",
                    tokens: "tokens",
                    all: "all",
                    token: "token",
                    className: "className",
                    sensitiveSearch: "sensitiveSearch"
                },
                tokens = options[id.tokens],
                allClassName = options[id.all][id.className],
                allSensitiveSearch = options[id.all][id.sensitiveSearch];
    
    
                function checkAndReplace(node, tokenArr, classNameAll, sensitiveSearchAll)
                {
                    var nodeVal = node.nodeValue, parentNode = node.parentNode,
                        i, j, curToken, myToken, myClassName, mySensitiveSearch,
                        finalClassName, finalSensitiveSearch,
                        foundIndex, begin, matched, end,
                        textNode, span, isFirst;
    
                    for (i = 0, j = tokenArr.length; i < j; i++)
                    {
                        curToken = tokenArr[i];
                        myToken = curToken[id.token];
                        myClassName = curToken[id.className];
                        mySensitiveSearch = curToken[id.sensitiveSearch];
    
                        finalClassName = (classNameAll ? myClassName + " " + classNameAll : myClassName);
    
                        finalSensitiveSearch = (typeof sensitiveSearchAll !== "undefined" ? sensitiveSearchAll : mySensitiveSearch);
    
                        isFirst = true;
                        while (true)
                        {
                            if (finalSensitiveSearch)
                                foundIndex = nodeVal.indexOf(myToken);
                            else
                                foundIndex = nodeVal.toLowerCase().indexOf(myToken.toLowerCase());
    
                            if (foundIndex < 0)
                            {
                                if (isFirst)
                                    break;
    
                                if (nodeVal)
                                {
                                    textNode = document.createTextNode(nodeVal);
                                    parentNode.insertBefore(textNode, node);
                                } // End if (nodeVal)
    
                                parentNode.removeChild(node);
                                break;
                            } // End if (foundIndex < 0)
    
                            isFirst = false;
    
    
                            begin = nodeVal.substring(0, foundIndex);
                            matched = nodeVal.substr(foundIndex, myToken.length);
    
                            if (begin)
                            {
                                textNode = document.createTextNode(begin);
                                parentNode.insertBefore(textNode, node);
                            } // End if (begin)
    
                            span = document.createElement("span");
                            span.className += finalClassName;
                            span.appendChild(document.createTextNode(matched));
                            parentNode.insertBefore(span, node);
    
                            nodeVal = nodeVal.substring(foundIndex + myToken.length);
                        } // Whend
    
                    } // Next i
                }; // End Function checkAndReplace
    
                function iterator(p)
                {
                    if (p === null) return;
    
                    var children = Array.prototype.slice.call(p.childNodes), i, cur;
    
                    if (children.length)
                    {
                        for (i = 0; i < children.length; i++)
                        {
                            cur = children[i];
                            if (cur.nodeType === 3)
                            {
                                checkAndReplace(cur, tokens, allClassName, allSensitiveSearch);
                            }
                            else if (cur.nodeType === 1)
                            {
                                iterator(cur);
                            }
                        }
                    }
                }; // End Function iterator
    
                iterator(options[id.container]);
            } // End Function highlighter
            ;
    
    
            internalHighlighter(
                {
                    container: container
                    , all:
                        {
                            className: "highlighter"
                        }
                    , tokens: [
                        {
                            token: highlightText
                            , className: "highlight"
                            , sensitiveSearch: false
                        }
                    ]
                }
            ); // End Call internalHighlighter
    
        } // End Function highlight
    
    };
 
    var container = document.all;
    var inputs, index;
    ​
    inputs = document.getElementsByClassName("searchcol")
    for (index = 0; index < inputs.length; ++index) {
        InstantSearch.highlight(inputs[index], this.inputvalue);
    }
    this.inputvalue="";
          
}

  reload()
  {
      location.reload();
  }  
}
