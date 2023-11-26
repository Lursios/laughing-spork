"use client"
import {Editor} from "@tinymce/tinymce-react";
import { useRef, useState } from "react";
import React from "react";
import { Controller } from "react-hook-form";

export type TextEditorProp = {
    name : string,
    control :any
}

export default function TextEditor({name,control}:TextEditorProp) {
    

    return (
        <div className="mb-28">
        <Controller
        
        render = {({field})=> {
          return (
            <Editor
            apiKey= {"tt0hjvcucl5awvx18em5tcf5q6haef5yltjgqz0cjptovhq6"}
            onEditorChange = {(content,editor)=> field.onChange(content)}
            value={field.value}   
            init={{ 
              content_css: "dark",
              useSSR :false,
              height: "100vh",
              plugins: 'tinycomments mentions anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage tableofcontents mergetags powerpaste tinymcespellchecker autocorrect a11ychecker typography inlinecss',
              toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
              tinycomments_mode: 'embedded',
              tinycomments_author: 'Author name',
              mergetags_list: [
                { value: 'First.Name', title: 'First Name' },
                { value: 'Email', title: 'Email' },
              ],
              // ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
              }}
            />  
          )}}
          name={name}
          control={control}
          defaultValue=""
        />

      

        </div>
    )
}
